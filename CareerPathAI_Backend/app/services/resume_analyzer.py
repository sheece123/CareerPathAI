from openai import OpenAI
from app.core.config import OPENAI_API_KEY
import json

client = OpenAI(api_key=OPENAI_API_KEY)


def resume_skill_gap_analysis(resume_text, target_domain):

    prompt = f"""
    You are an expert resume and career analyzer.

    Target Domain: {target_domain}

    Resume:
    {resume_text}

    Tasks:
    1. Extract skills
    2. Estimate skill level (Beginner, Intermediate, Expert)
    3. Identify missing skills
    4. Suggest improvements in resume
    5. Provide learning roadmap

    Return ONLY JSON:

    {{
      "extracted_skills": [
        {{"skill": "", "level": ""}}
      ],
      "skill_gaps": [],
      "resume_improvements": [],
      "learning_roadmap": []
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)