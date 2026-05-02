import json

# load career dataset
with open("app/data/careers.json", "r") as f:
    CAREERS = json.load(f)


def predict_careers(user):

    results = []

    for career in CAREERS:

        # ---------------- SKILLS ----------------
        user_skills = user["skills"]["technical_skills"]
        match = len(set(user_skills) & set(career["required_skills"]))

        skill_score = match / max(len(career["required_skills"]), 1)

        # ---------------- EDUCATION ----------------
        edu_score = 1 if user["education"]["field_of_study"] in career["preferred_subjects"] else 0.5

        # ---------------- WORK STYLE ----------------
        work_score = 1 if user["profile"]["work_style"] == career["work_style"] else 0.5

        # ---------------- COGNITIVE ----------------
        strength_values = list(user["cognitive"]["strengths"].values())
        cognitive_score = sum(strength_values) / (len(strength_values) * 5)

        # ---------------- FINAL SCORE ----------------
        final_score = (
            0.35 * skill_score +
            0.25 * edu_score +
            0.20 * work_score +
            0.20 * cognitive_score
        )

        results.append({
            "career": career["career"],
            "score": round(final_score, 2),
            "growth": career["growth"],
            "salary": career["salary"]
        })

    # sort careers
    results = sorted(results, key=lambda x: x["score"], reverse=True)

    return {
        "top_careers": results[:3]
    }