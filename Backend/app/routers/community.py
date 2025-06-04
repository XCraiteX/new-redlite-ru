from fastapi.routing import APIRouter
from bs4 import BeautifulSoup
import aiohttp

from utils.settings import *

router = APIRouter()

@router.get(API_URL_PREFIX + 'community')
async def app_get_community_data():

    async with aiohttp.ClientSession() as session:
        async with session.get(TELEGRAM_MEMBERS_INVITE) as response:

            soup = BeautifulSoup(await response.text(), 'html.parser')
            telegram_div = soup.find('div', class_='tgme_page_extra')
            telegram_members = int(telegram_div.text.replace('subscribers', '').strip())

        # async with session.get(DISCORD_MEMBERS_INVITE) as response:
        #     discord_data = await response.json()

    return {
        'telegram': telegram_members
        # 'discord': discord_data['profile']['member_count']
    }