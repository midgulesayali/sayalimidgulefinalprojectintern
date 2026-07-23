import re

SKILLS = {
    "python", "java", "javascript", "typescript", "react", "node", "fastapi", "django",
    "sql", "mysql", "postgresql", "mongodb", "aws", "azure", "docker", "kubernetes",
    "git", "machine learning", "data analysis", "excel", "power bi", "figma", "linux",
}


def extract_skills(text: str) -> list[str]:
    normalized = text.lower()
    return sorted(skill for skill in SKILLS if re.search(r"(?<!\\w)" + re.escape(skill) + r"(?!\\w)", normalized))


def match_job(resume_text: str, job_description: str) -> dict:
    resume_skills, job_skills = set(extract_skills(resume_text)), set(extract_skills(job_description))
    matched, missing = sorted(resume_skills & job_skills), sorted(job_skills - resume_skills)
    score = round(100 * len(matched) / len(job_skills)) if job_skills else 0
    return {"score": score, "matched_skills": matched, "missing_skills": missing}


def recommend_careers(skills: list[str]) -> list[dict]:
    catalog = [
        ("Backend Developer", {"python", "java", "sql", "fastapi", "django", "docker"}),
        ("Frontend Developer", {"javascript", "typescript", "react", "figma"}),
        ("Data Analyst", {"sql", "excel", "power bi", "python", "data analysis"}),
        ("Cloud / DevOps Engineer", {"aws", "azure", "docker", "kubernetes", "linux", "git"}),
    ]
    current = set(skills)
    results = []
    for title, required in catalog:
        overlap = sorted(current & required)
        missing = sorted(required - current)
        results.append({"career": title, "match_score": round(100 * len(overlap) / len(required)), "matching_skills": overlap, "next_skills": missing[:3]})
    return sorted(results, key=lambda item: item["match_score"], reverse=True)
