from fastapi.routing import APIRouter
from sqlalchemy import select, text

from data.db import db_session
from data.models import LicenseTable, UsersTable

from services.accounts import check_registration

from utils.settings import API_URL_PREFIX

router = APIRouter()

@router.get(API_URL_PREFIX + 'license/check')
async def app_check_license(project: str, user_id: str):
    
    async with db_session() as db:

        # Проверяем есть ли строка
        fetch = await db.execute(select(LicenseTable).where(LicenseTable.id == user_id))
        result = fetch.scalars().first()

        # Если есть извлекаем значение конкретного проекта
        if result:
            fetch = await db.execute(select(getattr(LicenseTable, project)).where(LicenseTable.id == user_id))
            license_value = fetch.scalar()

        # если нет, проверяем существует ли аккаунт
        else:
            fetch = await db.execute(select(UsersTable).where(UsersTable.id == user_id))
            result = fetch.scalars().first()

            # Если аккаунт существует, создаём для него запись лицензии
            if result:
                db.add(LicenseTable(id=user_id))
                await db.commit()

            else:
                return {
                    "status": "Error",
                    "detail": "Аккаунта не существует!"
                }
            
            license_value = False

        return {
            'status': 'OK',
            'license': license_value
        }
    