from fastapi.routing import APIRouter
from sqlalchemy import select

from utils.settings import API_URL_PREFIX
from data.db import db_session
from data.models import UsersTable

router = APIRouter()

@router.get(API_URL_PREFIX + 'profile/{login}')
async def app_get_profile(login: str):
    
    async with db_session() as db:
        fetch = await db.execute(select(UsersTable).where(UsersTable.login == login))
        user = fetch.scalars().first()

        if user:
            return { 'status': 'OK', 'login': user.login, 'developer': user.is_developer, 'created': user.created.strftime('%d.%m.%Y') }

    return { 'status': 'Error' }