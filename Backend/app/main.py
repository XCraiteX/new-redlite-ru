from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from routers.auth import router as auth_router
from routers.community import router as community_router
from routers.profile import router as profile_router
from routers.license import router as license_router
from routers.codes import router as codes_router

from config import API_URL_PREFIX
from data.db import create_tables

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

app.include_router(auth_router)
app.include_router(community_router)
app.include_router(profile_router)
app.include_router(license_router)
app.include_router(codes_router)


@app.get(API_URL_PREFIX)
async def app_api():
    return { 'status': 'OK', 'detail': 'API still working!' }


@app.on_event('startup')
async def app_startup():
    await create_tables()


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        port=3100,
        reload=True
    )