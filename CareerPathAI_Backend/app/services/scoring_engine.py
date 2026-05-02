# import json

# # load career dataset
# with open("app/data/careers.json", "r") as f:
#     CAREERS = json.load(f)


# def predict_careers(user):

#     results = []

#     for career in CAREERS:

#         # ---------------- SKILLS ----------------
#         user_skills = user["skills"]["technical_skills"]
#         match = len(set(user_skills) & set(career["required_skills"]))

#         skill_score = match / max(len(career["required_skills"]), 1)

#         # ---------------- EDUCATION ----------------
#         edu_score = 1 if user["education"]["field_of_study"] in career["preferred_subjects"] else 0.5

#         # ---------------- WORK STYLE ----------------
#         work_score = 1 if user["profile"]["work_style"] == career["work_style"] else 0.5

#         # ---------------- COGNITIVE ----------------
#         strength_values = list(user["cognitive"]["strengths"].values())
#         cognitive_score = sum(strength_values) / (len(strength_values) * 5)

#         # ---------------- FINAL SCORE ----------------
#         final_score = (
#             0.35 * skill_score +
#             0.25 * edu_score +
#             0.20 * work_score +
#             0.20 * cognitive_score
#         )

#         results.append({
#             "career": career["career"],
#             "score": round(final_score, 2),
#             "growth": career["growth"],
#             "salary": career["salary"]
#         })

#     # sort careers
#     results = sorted(results, key=lambda x: x["score"], reverse=True)

#     return {
#         "top_careers": results[:3]
#     }

import json

# load career dataset
with open("app/data/careers.json", "r") as f:
    CAREERS = json.load(f)


def normalize_list(items):
    return [item.lower().strip() for item in items]


def predict_careers(user):

    results = []

    # SAFE EXTRACTION (no crashes)
    user_skills = normalize_list(
        user.get("skills", {}).get("technical_skills", [])
    )

    user_field = user.get("education", {}).get("field_of_study", "").lower()

    user_work_style = user.get("profile", {}).get("work_style", "").lower()

    cognitive_strengths = user.get("cognitive", {}).get("strengths", {})

    strength_values = list(cognitive_strengths.values()) if cognitive_strengths else [3]

    cognitive_score = sum(strength_values) / (len(strength_values) * 5)

    for career in CAREERS:

        required_skills = normalize_list(career.get("required_skills", []))

        # ---------------- SKILL MATCH ----------------
        matched_skills = list(set(user_skills) & set(required_skills))

        skill_score = len(matched_skills) / max(len(required_skills), 1)

        # ---------------- EDUCATION ----------------
        preferred_subjects = normalize_list(career.get("preferred_subjects", []))

        edu_score = 1 if user_field in preferred_subjects else 0

        # ---------------- WORK STYLE ----------------
        work_score = 1 if user_work_style == career.get("work_style", "").lower() else 0

        # ---------------- FINAL SCORE ----------------
        final_score = (
            0.4 * skill_score +
            0.25 * edu_score +
            0.15 * work_score +
            0.2 * cognitive_score
        )

        results.append({
            "career": career.get("career"),
            "score": round(final_score * 100, 2),  # % score
            "matched_skills": matched_skills,
            "missing_skills": list(set(required_skills) - set(user_skills))[:5],
            "growth": career.get("growth"),
            "salary": career.get("salary")
        })

    # sort by score
    results = sorted(results, key=lambda x: x["score"], reverse=True)

    return {
        "top_careers": results[:3]
    }