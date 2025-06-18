from pydantic import BaseModel, EmailStr

class RegistrationProps(BaseModel):
    login: str
    email: EmailStr
    password: str

class LoginProps(BaseModel):
    email: EmailStr
    password: str 

class LicenseInitScheme(BaseModel):
    email: EmailStr
    password: str
    hwid: str