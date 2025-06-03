from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from data.db import create_tables

from routers.auth import router as auth_router
from routers.community import router as community_router

from utils.settings import API_URL_PREFIX

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

app.include_router(auth_router)
app.include_router(community_router)

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