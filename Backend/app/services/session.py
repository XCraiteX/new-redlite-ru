from random import randint 

from utils.settings import SESSION_KEY_LEN 

from string import digits, ascii_letters

async def generate_session_key():

    symbols = ascii_letters + digits
    
    return ''.join([symbols[randint(0, len(symbols) - 1)] for x in range(SESSION_KEY_LEN - 1)])

