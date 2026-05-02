import joblib
import pandas as pd

model = joblib.load("app/artifacts/model.pkl")
encoders = joblib.load("app/artifacts/encoders.pkl")
features = joblib.load("app/artifacts/features.pkl")


def encode(df):

    df = df.copy()

    for col, le in encoders.items():
        if col in df.columns:
            df[col] = df[col].astype(str)
            df[col] = le.transform(df[col])

    return df


def predict_careers(payload):

    data = {
        "age_range": payload["profile"]["age_range"],
        "current_status": payload["profile"]["current_status"],
        "work_style": payload["profile"]["work_style"],
        "career_inclination": payload["profile"]["career_inclination"],
        "highest_qualification": payload["education"]["highest_qualification"],
        "field_of_study": payload["education"]["field_of_study"],
        "performance": payload["education"]["performance"],
        "work_preference": payload["cognitive"]["work_preference"],
        "learning_style": payload["cognitive"]["learning_style"],
        "logical_thinking": payload["cognitive"]["strengths"]["Logical Thinking"],
        "mathematical_ability": payload["cognitive"]["strengths"]["Mathematical Ability"],
        "communication": payload["cognitive"]["strengths"]["Communication"],
        "creativity": payload["cognitive"]["strengths"]["Creativity"],
        "problem_solving": payload["cognitive"]["strengths"]["Problem Solving"],
    }

    df = pd.DataFrame([data])

    df = encode(df)

    # align columns (VERY IMPORTANT FIX)
    df = df.reindex(columns=features, fill_value=0)

    probs = model.predict_proba(df)[0]
    classes = model.classes_

    top_idx = probs.argsort()[-3:][::-1]

    return [
        {"career": classes[i], "score": float(probs[i])}
        for i in top_idx
    ]