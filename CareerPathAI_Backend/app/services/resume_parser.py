# import PyPDF2
# import re
# from io import BytesIO

# from app.services.skill_gap import skill_gap_resume

# SKILL_SET = [
#     "Python", "C++", "Java", "Machine Learning", "Deep Learning",
#     "SQL", "Data Analysis", "Statistics", "React", "Node.js",
#     "HTML", "CSS", "Communication", "Problem Solving"
# ]


# def extract_text_from_pdf(file):
#     file_bytes = file.file.read()
#     pdf_stream = BytesIO(file_bytes)

#     reader = PyPDF2.PdfReader(pdf_stream)

#     text = ""
#     for page in reader.pages:
#         page_text = page.extract_text()
#         if page_text:
#             text += page_text

#     return text


# def extract_skills_from_text(text):
#     extracted_skills = []

#     for skill in SKILL_SET:
#         try:
#             if re.search(re.escape(skill), text, re.IGNORECASE):
#                 extracted_skills.append(skill)
#         except:
#             continue

#     return extracted_skills


# def infer_strengths(skills):
#     strengths = []

#     for skill in skills:
#         if skill in ["Python", "Machine Learning", "SQL", "Data Analysis"]:
#             strengths.append("Analytical Thinking")

#         if skill in ["React", "HTML", "CSS"]:
#             strengths.append("Creative Thinking")

#         if skill == "Communication":
#             strengths.append("Communication Skills")

#         if skill == "Problem Solving":
#             strengths.append("Problem Solving Ability")

#     return list(set(strengths))


# def detect_weaknesses(skills):
#     return list(set(SKILL_SET) - set(skills))[:5]


# # ✅ MAIN FUNCTION USED BY ROUTES
# def parse_resume(file):

#     text = extract_text_from_pdf(file)

#     skills = extract_skills_from_text(text)

#     strengths = infer_strengths(skills)

#     weaknesses = detect_weaknesses(skills)

#     resume_score = round((len(skills) / len(SKILL_SET)) * 100, 2)

#     return {
#         "resume_score": resume_score,
#         "extracted_skills": skills,
#         "strengths": strengths,
#         "weaknesses": weaknesses,
#         "raw_text_preview": text[:500]
#     }

import PyPDF2
import re
from io import BytesIO
from fastapi import UploadFile, HTTPException


SKILL_SET = [
    "Python", "C++", "Java", "Machine Learning", "Deep Learning",
    "SQL", "Data Analysis", "Statistics", "React", "Node.js",
    "HTML", "CSS", "Communication", "Problem Solving"
]


# =========================
# PDF TEXT EXTRACTION
# =========================
async def extract_text_from_pdf(file: UploadFile):

    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")

    file_bytes = await file.read()
    pdf_stream = BytesIO(file_bytes)

    reader = PyPDF2.PdfReader(pdf_stream)

    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + " "

    return text


# =========================
# SKILL EXTRACTION
# =========================
def extract_skills_from_text(text: str):

    extracted_skills = []

    for skill in SKILL_SET:
        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text, re.IGNORECASE):
            extracted_skills.append(skill)

    return list(set(extracted_skills))


# =========================
# STRENGTHS
# =========================
def infer_strengths(skills):

    strengths = set()

    for skill in skills:

        if skill in ["Python", "Machine Learning", "SQL", "Data Analysis"]:
            strengths.add("Analytical Thinking")

        if skill in ["React", "HTML", "CSS"]:
            strengths.add("Creative Thinking")

        if skill == "Communication":
            strengths.add("Communication Skills")

        if skill == "Problem Solving":
            strengths.add("Problem Solving Ability")

    return list(strengths)


# =========================
# WEAKNESSES
# =========================
def detect_weaknesses(skills):
    missing = list(set(SKILL_SET) - set(skills))
    return missing[:5]


# =========================
# MAIN FUNCTION
# =========================
async def parse_resume(file: UploadFile):

    text = await extract_text_from_pdf(file)

    if not text.strip():
        raise HTTPException(status_code=400, detail="Could not extract text from PDF")

    skills = extract_skills_from_text(text)

    strengths = infer_strengths(skills)

    weaknesses = detect_weaknesses(skills)

    resume_score = round((len(skills) / len(SKILL_SET)) * 100, 2)

    return {
        "resume_score": resume_score,
        "extracted_skills": skills,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "raw_text_preview": text[:500]
    }