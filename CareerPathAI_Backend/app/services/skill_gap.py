import json

with open("app/data/careers.json", "r") as f:
    careers_data = json.load(f)


def get_target_skills(target_field):
    for career in careers_data:
        if career["career"].lower() == target_field.lower():
            return career.get("required_skills", [])
    return []


# =========================
# 1. MANUAL SKILL GAP
# =========================
def skill_gap_manual(user_input):

    target_field = user_input.get("target_field", "")

    beginner = user_input.get("beginner_skills", [])
    intermediate = user_input.get("intermediate_skills", [])
    advanced = user_input.get("advanced_skills", [])

    user_skills = beginner + intermediate + advanced

    target_skills = get_target_skills(target_field)

    missing_skills = list(set(target_skills) - set(user_skills))
    matched_skills = list(set(target_skills) & set(user_skills))

    skill_summary = {
        "beginner": len(beginner),
        "intermediate": len(intermediate),
        "advanced": len(advanced)
    }

    return {
        "target_field": target_field,
        "missing_skills": missing_skills,
        "matched_skills": matched_skills,
        "skill_level_summary": skill_summary,
        "priority_skills": missing_skills[:3],
        "recommendation": "Focus on missing core skills for career readiness"
    }


# =========================
# 2. RESUME BASED SKILL GAP
# =========================
def skill_gap_resume(resume_skills, target_field):

    target_skills = get_target_skills(target_field)

    missing_skills = list(set(target_skills) - set(resume_skills))
    matched_skills = list(set(target_skills) & set(resume_skills))

    return {
        "target_field": target_field,
        "missing_skills": missing_skills,
        "matched_skills": matched_skills,
        "priority_skills": missing_skills[:3],
        "recommendation": "These are the skills you should learn to match job market"
    }