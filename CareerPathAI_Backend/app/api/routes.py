from fastapi import APIRouter
from app.services.career_service import predict_careers

router = APIRouter()

@router.post("/predict-career")
def predict_route(payload: dict):

    result = predict_careers(payload)

    return {
        "status": "success",
        "data": {
            "top_careers": result
        }
    }