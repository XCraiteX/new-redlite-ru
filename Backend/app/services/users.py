from sqlalchemy import select
from data.models import UsersTable
from data.db import db_session


async def get_user_by_session(session_key: str) -> UsersTable:

    async with db_session() as db:
        fetch = await db.execute(select(UsersTable).where(UsersTable.session == session_key).limit(1))
        
        return fetch.scalar_one_or_none()