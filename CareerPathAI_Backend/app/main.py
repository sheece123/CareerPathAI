from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="CareerPathAI",
    version="1.0",
    description="AI-based Career, Resume & Skill Gap System"
)

# include all APIs
app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "CareerPathAI backend is running"
    }