import os
import gdown
import pickle

FOLDER_URL = "https://drive.google.com/drive/folders/1N4tFa9HiIdjUdY775wUsCxU6RF6JOfG5?usp=drive_link"
OUTPUT_DIR = "artifacts/models"

def load_models():
    model_path = os.path.join(OUTPUT_DIR, "model.pkl")

    if not os.path.exists(model_path):
        print("Downloading models from Drive...")
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        gdown.download_folder(
            url=FOLDER_URL,
            output=OUTPUT_DIR,
            quiet=False,
            use_cookies=False
        )

    with open(model_path, "rb") as f:
        model = pickle.load(f)

    return model
