from random import randint
from fastapi import Request 

from config import SESSION_KEY_LEN, SYMBOLS


async def get_session_key(request: Request):
    
    session_key = request.cookies.get('session_key')

    if session_key == "" or session_key == None:
        session_key = request.headers.get('Authorization')

    return session_key


async def generate_session_key():
    
    return ''.join([SYMBOLS[randint(0, len(SYMBOLS) - 1)] for _ in range(SESSION_KEY_LEN - 1)])

