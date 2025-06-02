from fastapi.routing import APIRouter

from data.schemas import RegistrationProps
from data.models import UsersTable
from data.db import db_session

from services.hashing import hash_string
from services.accounts import check_registration

from utils.settings import API_URL_PREFIX

router = APIRouter()

@router.post(API_URL_PREFIX + '/register')
async def app_register_user(props: RegistrationProps):

    registered, error = await check_registration(props.login, props.email)

    if registered:
        return { 'status': 'Error', 'detail': error }

    async with db_session() as db:

        hashed_password = await hash_string(props.password)

        user = UsersTable(login=props.login, email=props.email, password=hashed_password)

        db.add(user)

        await db.commit()

        return { 'status': 'OK', 'detail': 'Аккаунт успешно зарегистрирован!' }