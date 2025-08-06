from fastapi import Request

from services.users import get_user_by_session


async def check_is_admin(request: Request) -> bool:

    user = await get_user_by_session(request)

    if not user:
        return False

    return user.is_developer
