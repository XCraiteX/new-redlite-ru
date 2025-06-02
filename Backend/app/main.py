from fastapi import FastAPI
import uvicorn

from data.db import create_tables
from routers.auth import router as auth_router
from utils.settings import API_URL_PREFIX

app = FastAPI()

app.include_router(auth_router)

@app.get(API_URL_PREFIX)
async def app_api():
    return { 'status': 'OK', 'detail': 'API still working!' }


@app.on_event('startup')
async def app_startup():
    await create_tables()


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        port=3001,
        reload=True
    )