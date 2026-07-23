import re
from app.services.career_service import extract_skills


def analyze_resume(text: str) -> dict:
    text = text.strip()
    skills = extract_skills(text)
    sections = {section: bool(re.search(rf"(?im)^\\s*{section}", text)) for section in ("experience", "education", "skills", "projects")}
    strengths = []
    weaknesses = []
    if skills:
        strengths.append("Recognizable technical skills: " + ", ".join(skills))
    else:
        weaknesses.append("Add a dedicated skills section with relevant tools and technologies.")
    for section, exists in sections.items():
        (strengths if exists else weaknesses).append(f"{'Includes' if exists else 'Missing'} a {section.title()} section.")
    if not re.search(r"\b\d+(?:\.\d+)?%?\b", text):
        weaknesses.append("Quantify impact with metrics such as percentages, amounts, or time saved.")
    score = min(100, max(20, 40 + len(skills) * 6 + sum(sections.values()) * 8 - len(weaknesses) * 4))
    return {"score": score, "skills": skills, "strengths": strengths, "weaknesses": weaknesses, "suggestions": ["Tailor keywords to each job description.", "Use concise action-led bullet points."]}
