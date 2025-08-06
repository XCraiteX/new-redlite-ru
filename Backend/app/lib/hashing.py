import bcrypt 

async def hash_string(string: str) -> str:

    salt = bcrypt.gensalt()
    
    hashed_string = bcrypt.hashpw(password=string.encode('utf-8'), salt=salt)

    return hashed_string.decode('utf-8')
 
 
async def compare_passwords(password: str, hashed_password: str) -> bool:

    status = bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

    return status