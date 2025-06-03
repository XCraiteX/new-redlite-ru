from fastapi.routing import APIRouter
from fastapi.exceptions import HTTPException
from fastapi import Request, Response
from sqlalchemy import select

from data.schemas import RegistrationProps, LoginProps
from data.models import UsersTable
from data.db import db_session

from services.hashing import hash_string, compare_passwords
from services.accounts import check_registration, check_session_key
from services.session import generate_session_key

from utils.settings import API_URL_PREFIX

router = APIRouter()


@router.get(API_URL_PREFIX + 'me')
async def app_auth_me(request: Request):
    
    session_key = request.cookies.get('session_key')

    status, login, developer = await check_session_key(session_key)
    
    if status:
        return { 'status': 'OK', 'login': login, 'developer': developer }
    
    raise HTTPException(status_code=401)


@router.post(API_URL_PREFIX + 'registration')
async def app_register_user(props: RegistrationProps):

    registered, error = await check_registration(props.login, props.email)

    if registered:
        return { 'status': 'Error', 'detail': error }

    async with db_session() as db:

        hashed_password = await hash_string(props.password)

        user = UsersTable(login=props.login, email=props.email, password=hashed_password, session=await generate_session_key())

        db.add(user)

        await db.commit()

        return { 'status': 'OK', 'detail': 'Аккаунт успешно зарегистрирован!' }
    

@router.post(API_URL_PREFIX + 'login')
async def app_login_user(props: LoginProps, response: Response):

    registered, _ = await check_registration('', props.email)

    if not registered:
        return { 'status': 'Error', 'detail': 'Аккаунта не существует!' }

    async with db_session() as db:

        result = await db.execute(select(UsersTable).where(UsersTable.email == props.email))
        user = result.scalars().first()

        if await compare_passwords(props.password, user.password) == False:
            return { 'status': 'Error', 'detail': 'Неверный пароль от аккаунта!' }

        response.set_cookie('session_key', user.session)

        return { 'status': 'OK', 'detail': 'Вы успешно вошли в аккаунт!' }