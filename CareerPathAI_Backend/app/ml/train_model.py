import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

from app.ml.preprocess import preprocess

DATA_PATH = "app/data/dataset.csv"

def train():

    df = pd.read_csv(DATA_PATH)

    print("Columns:", df.columns)

    X, y, encoders = preprocess(df)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y,
        test_size=0.2,
        random_state=42
    )

    model = RandomForestClassifier(
        n_estimators=300,
        max_depth=25,
        random_state=42
    )

    model.fit(X_train, y_train)

    print("MODEL TRAINED SUCCESSFULLY")

    joblib.dump(model, "app/artifacts/model.pkl")
    joblib.dump(encoders, "app/artifacts/encoders.pkl")
    joblib.dump(list(X.columns), "app/artifacts/features.pkl")

if __name__ == "__main__":
    train()