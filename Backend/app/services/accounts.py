from sqlalchemy import select

from data.models import UsersTable
from data.db import db_session

async def check_registration(login: str, email: str) -> tuple[bool, str]:

    async with db_session() as db:
        query = await db.execute(select(UsersTable).where(UsersTable.login == login))
        result = query.scalars().first() 

        if result: 
            return True, 'Пользователь с таким Логином уже существует!'
        
        query = await db.execute(select(UsersTable).where(UsersTable.email == email))
        result = query.scalars().first()

        if result: 
            return True, 'Пользователь с таким Email уже существует!'
    
    return False, ''


async def check_session_key(session: str) -> tuple[bool, str]:

    async with db_session() as db:
        query = await db.execute(select(UsersTable).where(UsersTable.session == session))
        result = query.scalars().first() 

        if not result:
            return False, ''

        return True, result.login
        
    
