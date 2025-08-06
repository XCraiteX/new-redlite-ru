from fastapi import APIRouter, HTTPException, Request

from config import API_URL_PREFIX, SYMBOLS
from lib.codes import generate_activation_code
from services.admin import check_is_admin

router = APIRouter()

@router.get(API_URL_PREFIX + 'codes')
async def router_create_code(request: Request):

    # Проверка прав
    is_admin = await check_is_admin(request)

    if not is_admin:
        raise HTTPException(status_code=401)

    # Создаём код
    await generate_activation_code()

    return 'Код успешно создан'