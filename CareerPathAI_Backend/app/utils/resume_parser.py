import PyPDF2
from io import BytesIO

SKILLS = ["Python", "SQL", "ML", "AI", "C++", "React"]

def extract_skills(file):

    text = ""
    pdf = PyPDF2.PdfReader(BytesIO(file.file.read()))

    for p in pdf.pages:
        text += p.extract_text() or ""

    return [s for s in SKILLS if s.lower() in text.lower()]