def flatten_input(data):

    return {
        "age_range": data["profile"]["age_range"],
        "current_status": data["profile"]["current_status"],
        "work_style": data["profile"]["work_style"],
        "career_inclination": data["profile"]["career_inclination"],

        "highest_qualification": data["education"]["highest_qualification"],
        "field_of_study": data["education"]["field_of_study"],
        "performance": data["education"]["performance"],

        "Programming": int("Programming" in data["skills"]["technical_skills"]),
        "Data Analysis": int("Data Analysis" in data["skills"]["technical_skills"]),
        "Graphic Design": int("Graphic Design" in data["skills"]["technical_skills"]),
        "Writing": int("Writing" in data["skills"]["technical_skills"]),
        "Marketing": int("Marketing" in data["skills"]["technical_skills"]),
        "Networking": int("Networking" in data["skills"]["technical_skills"]),

        "Python": int("Python" in data["skills"]["tools"]),
        "Excel": int("Excel" in data["skills"]["tools"]),
        "React": int("React" in data["skills"]["tools"]),
        "Canva": int("Canva" in data["skills"]["tools"]),

        "logical_thinking": data["cognitive"]["strengths"]["Logical Thinking"],
        "mathematical_ability": data["cognitive"]["strengths"]["Mathematical Ability"],
        "communication": data["cognitive"]["strengths"]["Communication"],
        "creativity": data["cognitive"]["strengths"]["Creativity"],
        "problem_solving": data["cognitive"]["strengths"]["Problem Solving"],

        "work_preference": data["cognitive"]["work_preference"],
        "learning_style": data["cognitive"]["learning_style"]
    }