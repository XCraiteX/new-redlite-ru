from fastapi.routing import APIRouter
from sqlalchemy import select, text

from data.db import db_session
from data.models import LicenseTable, UsersTable
from data.schemas import LicenseInitScheme

from services.accounts import check_registration

from utils.settings import API_URL_PREFIX

router = APIRouter()

@router.get(API_URL_PREFIX + 'orbit/license/check/{hwid}')
async def app_check_orbit_license(hwid: str):

    async with db_session() as db:

        fetch = await db.execute(select(LicenseTable.orbit).where(LicenseTable.orbit_hwid == hwid))
        result = fetch.scalars().first()

        if result:
            return True
        
        return False


@router.post(API_URL_PREFIX + 'orbit/license/init')
async def app_init_orbit_license(data: LicenseInitScheme):

    async with db_session() as db:

        # Проверяем существует ли аккаунт
        fetch = await db.execute(select(UsersTable).where(UsersTable.email == data.email))
        user = fetch.scalars().first()

        if not user:
            return {
                'status': 'Error',
                'detail': 'Аккаунта не существует!'
            }
        
        # Берём строку целевого юзера
        fetch = await db.execute(select(LicenseTable).where(LicenseTable.id == user.id))
        license_object = fetch.scalars().first()

        # Если лицензия есть
        if license_object.orbit:

            # Если HWID пустой
            if license_object.orbit_hwid.replace(' ', '') == '':
                license_object.orbit_hwid = data.hwid

                await db.commit()

                return {
                    'status': 'OK',
                    'detail': 'Айди устройства успешно привязано к аккаунту!'
                }

            
            # Если HWID не совпадают
            if license_object.orbit_hwid != data.hwid:
                return {
                    'status': 'Error',
                    'detail': 'К аккаунту привязан другой айди устройства!'
                }
            

        return {
            'status': 'Error',
            'detail': 'У вас нет лицензии Orbit!'
        }
        

