import pandas as pd
import ast
from sklearn.preprocessing import LabelEncoder

def safe_eval(x):
    try:
        return ast.literal_eval(x)
    except:
        return x


def preprocess(df):

    df = df.copy()

    # -----------------------------
    # FIX LIST COLUMNS
    # -----------------------------
    if isinstance(df["key_subjects"].iloc[0], str):
        df["key_subjects"] = df["key_subjects"].apply(safe_eval)

    if isinstance(df["technical_skills"].iloc[0], str):
        df["technical_skills"] = df["technical_skills"].apply(safe_eval)

    # -----------------------------
    # FEATURE ENGINEERING
    # -----------------------------
    df["skills_count"] = df["technical_skills"].apply(len)
    df["subjects_count"] = df["key_subjects"].apply(len)

    # -----------------------------
    # DROP HIGH-RISK RAW TEXT FIELDS
    # -----------------------------
    drop_cols = [
        "full_name",
        "technical_skills",
        "skill_levels",
        "tools",
        "key_subjects",
        "top_career_1",
        "top_career_2",
        "top_career_3",
        "top_career_1_score",
        "top_career_2_score",
        "top_career_3_score",
        "top_career_1_salary",
        "top_career_2_salary",
        "top_career_3_salary"
    ]

    X = df.drop(columns=drop_cols)

    # -----------------------------
    # ENCODE ALL OBJECT COLUMNS
    # -----------------------------
    encoders = {}

    for col in X.columns:
        if X[col].dtype == "object":

            le = LabelEncoder()
            X[col] = le.fit_transform(X[col].astype(str))
            encoders[col] = le

    # -----------------------------
    # TARGET (ONLY ONE LABEL)
    # -----------------------------
    y = df["top_career_1"]

    return X, y, encoders