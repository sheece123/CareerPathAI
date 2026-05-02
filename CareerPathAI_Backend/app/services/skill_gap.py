from openai import OpenAI
from app.core.config import OPENAI_API_KEY
import json

client = OpenAI(api_key=OPENAI_API_KEY)


# -------- WORKFLOW 1: USER SKILLS + LEVEL --------
def skill_gap_with_levels(skills, target_domain):

    prompt = f"""
    You are an expert career advisor.

    Target Domain: {target_domain}

    User Skills with Levels:
    {skills}

    Each skill has a level: Beginner, Intermediate, Expert.

    Analyze and return ONLY JSON:

    {{
      "skill_gaps": [],
      "skills_to_improve": [],
      "priority_learning": [
        {{"skill": "", "reason": ""}}
      ],
      "roadmap": [
        {{"step": "", "description": ""}}
      ]
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)