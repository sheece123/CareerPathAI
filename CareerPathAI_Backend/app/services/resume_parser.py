import PyPDF2
import re
from io import BytesIO

from app.services.skill_gap import skill_gap_resume

SKILL_SET = [
    "Python", "C++", "Java", "Machine Learning", "Deep Learning",
    "SQL", "Data Analysis", "Statistics", "React", "Node.js",
    "HTML", "CSS", "Communication", "Problem Solving"
]


def extract_text_from_pdf(file):
    file_bytes = file.file.read()
    pdf_stream = BytesIO(file_bytes)

    reader = PyPDF2.PdfReader(pdf_stream)

    text = ""
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text

    return text


def extract_skills_from_text(text):
    extracted_skills = []

    for skill in SKILL_SET:
        try:
            if re.search(re.escape(skill), text, re.IGNORECASE):
                extracted_skills.append(skill)
        except:
            continue

    return extracted_skills


def infer_strengths(skills):
    strengths = []

    for skill in skills:
        if skill in ["Python", "Machine Learning", "SQL", "Data Analysis"]:
            strengths.append("Analytical Thinking")

        if skill in ["React", "HTML", "CSS"]:
            strengths.append("Creative Thinking")

        if skill == "Communication":
            strengths.append("Communication Skills")

        if skill == "Problem Solving":
            strengths.append("Problem Solving Ability")

    return list(set(strengths))


def detect_weaknesses(skills):
    return list(set(SKILL_SET) - set(skills))[:5]


# ✅ MAIN FUNCTION USED BY ROUTES
def parse_resume(file):

    text = extract_text_from_pdf(file)

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