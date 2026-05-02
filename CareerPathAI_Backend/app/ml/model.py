from sklearn.ensemble import RandomForestClassifier

def get_model():
    return RandomForestClassifier(
        n_estimators=400,
        max_depth=20,
        random_state=42
    )