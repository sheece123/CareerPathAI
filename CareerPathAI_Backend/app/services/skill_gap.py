# import json

# with open("app/data/careers.json", "r") as f:
#     careers_data = json.load(f)


# def get_target_skills(target_field):
#     for career in careers_data:
#         if career["career"].lower() == target_field.lower():
#             return career.get("required_skills", [])
#     return []


# # =========================
# # 1. MANUAL SKILL GAP
# # =========================
# def skill_gap_manual(user_input):

#     target_field = user_input.get("target_field", "")

#     beginner = user_input.get("beginner_skills", [])
#     intermediate = user_input.get("intermediate_skills", [])
#     advanced = user_input.get("advanced_skills", [])

#     user_skills = beginner + intermediate + advanced

#     target_skills = get_target_skills(target_field)

#     missing_skills = list(set(target_skills) - set(user_skills))
#     matched_skills = list(set(target_skills) & set(user_skills))

#     skill_summary = {
#         "beginner": len(beginner),
#         "intermediate": len(intermediate),
#         "advanced": len(advanced)
#     }

#     return {
#         "target_field": target_field,
#         "missing_skills": missing_skills,
#         "matched_skills": matched_skills,
#         "skill_level_summary": skill_summary,
#         "priority_skills": missing_skills[:3],
#         "recommendation": "Focus on missing core skills for career readiness"
#     }


# # =========================
# # 2. RESUME BASED SKILL GAP
# # =========================
# def skill_gap_resume(resume_skills, target_field):

#     target_skills = get_target_skills(target_field)

#     missing_skills = list(set(target_skills) - set(resume_skills))
#     matched_skills = list(set(target_skills) & set(resume_skills))

#     return {
#         "target_field": target_field,
#         "missing_skills": missing_skills,
#         "matched_skills": matched_skills,
#         "priority_skills": missing_skills[:3],
#         "recommendation": "These are the skills you should learn to match job market"
#     }

import json

with open("app/data/careers.json", "r") as f:
    careers_data = json.load(f)


def normalize_list(items):
    return [item.lower().strip() for item in items]


def get_target_skills(target_field):
    for career in careers_data:
        if career["career"].lower() == target_field.lower():
            return career.get("required_skills", [])
    return []


# =========================
# 1. MANUAL SKILL GAP
# =========================
def skill_gap_manual(user_input):

    target_field = user_input.get("target_field", "").strip()

    beginner = user_input.get("beginner_skills", [])
    intermediate = user_input.get("intermediate_skills", [])
    advanced = user_input.get("advanced_skills", [])

    if not target_field:
        return {
            "success": False,
            "message": "target_field is required"
        }

    # normalize skills
    user_skills = normalize_list(beginner + intermediate + advanced)
    target_skills = normalize_list(get_target_skills(target_field))

    if not target_skills:
        return {
            "success": False,
            "message": "Invalid target field"
        }

    missing_skills = list(set(target_skills) - set(user_skills))
    matched_skills = list(set(target_skills) & set(user_skills))

    progress = round((len(matched_skills) / len(target_skills)) * 100, 2)

    skill_summary = {
        "beginner": len(beginner),
        "intermediate": len(intermediate),
        "advanced": len(advanced)
    }

    return {
        "success": True,
        "data": {
            "target_field": target_field,
            "progress": progress,
            "missing_skills": missing_skills,
            "matched_skills": matched_skills,
            "skill_level_summary": skill_summary,
            "priority_skills": missing_skills[:3],
            "recommendation": generate_recommendation(progress)
        }
    }


# =========================
# 2. RESUME BASED SKILL GAP
# =========================
def skill_gap_resume(resume_skills, target_field):

    if not target_field:
        return {
            "success": False,
            "message": "target_field is required"
        }

    resume_skills = normalize_list(resume_skills)
    target_skills = normalize_list(get_target_skills(target_field))

    if not target_skills:
        return {
            "success": False,
            "message": "Invalid target field"
        }

    missing_skills = list(set(target_skills) - set(resume_skills))
    matched_skills = list(set(target_skills) & set(resume_skills))

    progress = round((len(matched_skills) / len(target_skills)) * 100, 2)

    return {
        "success": True,
        "data": {
            "target_field": target_field,
            "progress": progress,
            "missing_skills": missing_skills,
            "matched_skills": matched_skills,
            "priority_skills": missing_skills[:3],
            "recommendation": generate_recommendation(progress)
        }
    }


# =========================
# HELPER
# =========================
def generate_recommendation(progress):

    if progress >= 80:
        return "You are almost job-ready. Focus on polishing advanced concepts and real-world projects."

    elif progress >= 50:
        return "You have a good foundation. Focus on bridging intermediate gaps to reach industry readiness."

    else:
        return "You need to build core skills. Start with fundamentals and gradually move to advanced topics."