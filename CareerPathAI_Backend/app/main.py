# from fastapi import FastAPI
# from app.api.routes import router

# app = FastAPI(
#     title="CareerPathAI",
#     version="1.0",
#     description="AI-based Career, Resume & Skill Gap System"
# )

# # include all APIs
# app.include_router(router)


# @app.get("/")
# def home():
#     return {
#         "message": "CareerPathAI backend is running"
#     }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

app = FastAPI(
    title="CareerPathAI",
    version="1.0",
    description="AI-based Career, Resume & Skill Gap System"
)

# ✅ CORS (REQUIRED FOR FRONTEND)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ API PREFIX (CLEAN STRUCTURE)
app.include_router(router, prefix="/api")


# ✅ HEALTH CHECK
@app.get("/")
def home():
    return {
        "success": True,
        "message": "CareerPathAI backend is running"
    }