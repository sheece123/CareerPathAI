def recommend_courses(missing_skills):

    courses = []

    for skill in missing_skills:
        courses.append({
            "skill": skill,
            "course": f"Learn {skill} from Coursera / YouTube",
            "level": "Beginner to Advanced"
        })

    return courses