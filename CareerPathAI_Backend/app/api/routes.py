# from fastapi import APIRouter, UploadFile, File

# from app.services.scoring_engine import predict_careers
# from app.services.skill_gap import skill_gap_manual, skill_gap_resume
# from app.services.resume_parser import parse_resume

# router = APIRouter()


# # =========================
# # 1. CAREER PREDICTION
# # =========================
# @router.post("/predict-career")
# def predict_career_route(user_input: dict):

#     result = predict_careers(user_input)

#     return {
#         "status": "success",
#         "data": result
#     }


# # =========================
# # 2. SKILL GAP - MANUAL FLOW
# # =========================
# @router.post("/skill-gap/manual")
# def skill_gap_manual_route(user_input: dict):

#     result = skill_gap_manual(user_input)

#     return {
#         "status": "success",
#         "data": result
#     }


# # =========================
# # 3. RESUME ANALYSIS + SKILLS
# # =========================
# @router.post("/resume-analysis")
# def resume_analysis_route(file: UploadFile = File(...)):

#     result = parse_resume(file)

#     return {
#         "status": "success",
#         "data": result
#     }


# # =========================
# # 4. SKILL GAP - FROM RESUME
# # =========================
# @router.post("/skill-gap/resume")
# def skill_gap_resume_route(user_input: dict):

#     resume_skills = user_input.get("resume_skills", [])
#     target_field = user_input.get("target_field", "")

#     result = skill_gap_resume(resume_skills, target_field)

#     return {
#         "status": "success",
#         "data": result
#     }

from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.scoring_engine import predict_careers
from app.services.skill_gap import skill_gap_manual, skill_gap_resume
from app.services.resume_parser import parse_resume

router = APIRouter()


# =========================
# 1. CAREER PREDICTION
# =========================
@router.post("/predict-career")
def predict_career_route(user_input: dict):
    try:
        result = predict_careers(user_input)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# =========================
# 2. SKILL GAP - MANUAL
# =========================
@router.post("/skill-gap/manual")
def skill_gap_manual_route(user_input: dict):
    try:
        result = skill_gap_manual(user_input)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# =========================
# 3. RESUME ANALYSIS
# =========================
@router.post("/resume-analysis")
async def resume_analysis_route(file: UploadFile = File(...)):
    try:
        result = await parse_resume(file)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# =========================
# 4. SKILL GAP - RESUME
# =========================
@router.post("/skill-gap/resume")
def skill_gap_resume_route(user_input: dict):
    try:
        resume_skills = user_input.get("resume_skills", [])
        target_field = user_input.get("target_field", "")

        if not target_field:
            raise HTTPException(status_code=400, detail="target_field is required")

        result = skill_gap_resume(resume_skills, target_field)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))