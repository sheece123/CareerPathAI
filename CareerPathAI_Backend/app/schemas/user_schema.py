from pydantic import BaseModel
from typing import List, Dict


# ---------------- STEP 1 ----------------
class Profile(BaseModel):
    full_name: str
    age_range: str
    current_status: str
    work_style: str
    career_inclination: str


# ---------------- STEP 2 ----------------
class Education(BaseModel):
    highest_qualification: str
    field_of_study: str
    key_subjects: List[str]
    academic_performance: str


# ---------------- STEP 3 ----------------
class Skills(BaseModel):
    technical_skills: List[str]
    skill_level: str
    tools: List[str] = []


# ---------------- STEP 4 ----------------
class Cognitive(BaseModel):
    strengths: Dict[str, int]
    work_preference: str
    learning_style: str


# ---------------- FINAL INPUT ----------------
class UserInput(BaseModel):
    profile: Profile
    education: Education
    skills: Skills
    cognitive: Cognitive