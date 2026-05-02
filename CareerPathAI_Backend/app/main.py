from fastapi import FastAPI, UploadFile, File, Form
from app.services.career_service import predict_careers  # ✅ untouched
from app.services.skill_gap import skill_gap_with_levels
from app.services.resume_analyzer import resume_skill_gap_analysis

import pdfplumber
import docx

app = FastAPI(title="CareerPath AI API")

from model_loader import load_models

# Load model once when app starts
model = load_models()

print("Model ready to use")

# Example API / function usage
def predict(data):
    return model.predict(data)
# ------------------ ROOT ------------------
@app.get("/")
def home():
    return {"message": "CareerPath AI Running"}


# ------------------ CAREER PREDICTION (UNCHANGED) ------------------
@app.post("/predict-career")
def predict_career_api(data: dict):
    return predict_careers(data)


# ------------------ SKILL GAP (WORKFLOW 1) ------------------
@app.post("/skill-gap")
def skill_gap_api(data: dict):

    if "skills" not in data or "target_domain" not in data:
        return {"error": "skills and target_domain required"}

    return skill_gap_with_levels(
        data["skills"],
        data["target_domain"]
    )


# ------------------ RESUME + SKILL GAP (WORKFLOW 2) ------------------
@app.post("/resume-analysis")
async def resume_analysis_api(
    file: UploadFile = File(...),
    target_domain: str = Form(...)
):
    text = ""

    # PDF
    if file.filename.endswith(".pdf"):
        with pdfplumber.open(file.file) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""

    # DOCX
    elif file.filename.endswith(".docx"):
        doc = docx.Document(file.file)
        for para in doc.paragraphs:
            text += para.text + "\n"

    else:
        return {"error": "Only PDF/DOCX supported"}

    if not text.strip():
        return {"error": "Empty resume"}

    return resume_skill_gap_analysis(text, target_domain)