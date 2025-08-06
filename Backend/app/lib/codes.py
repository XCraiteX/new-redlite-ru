from config import SYMBOLS

async def generate_activation_code() -> str:

    # XXXX-XXXX-XXXX-XXXX

    parts = [''.join(l for l in range(0, 4)) for part in range(0, 4)]

    code = ''.join(parts)

    print(parts)
    print(code)