from sqlalchemy import String, Integer, Boolean, DateTime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from datetime import datetime

class Base(DeclarativeBase):
    pass 

class UsersTable(Base):
    __tablename__ = 'users'

    id: Mapped[Integer] = mapped_column(Integer, primary_key=True, autoincrement=True)
    login: Mapped[String] = mapped_column(String, unique=True)
    email: Mapped[String] = mapped_column(String, unique=True)
    password: Mapped[String] = mapped_column(String)
    session: Mapped[String] = mapped_column(String, unique=True)
    is_developer: Mapped[Boolean] = mapped_column(Boolean, default=False)
    created: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())


class LicenseTable(Base):
    __tablename__ = 'license'

    id: Mapped[Integer] = mapped_column(Integer, primary_key=True)
    orbit: Mapped[Boolean] = mapped_column(Boolean, default=False)
    orbit_hwid: Mapped[String] = mapped_column(String, default='')
