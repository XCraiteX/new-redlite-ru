from sqlalchemy import String, Integer, Boolean
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
    pass 

class UsersTable(Base):
    __tablename__ = 'users'

    id: Mapped[Integer] = mapped_column(Integer, autoincrement=True)
    login: Mapped[String] = mapped_column(String, unique=True)
    email: Mapped[String] = mapped_column(String, primary_key=True)
    password: Mapped[String] = mapped_column(String)
    