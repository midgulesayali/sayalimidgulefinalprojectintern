from app.services.career_service import match_job


def calculate_ats_match(resume_text: str, job_description: str) -> dict:
    """Return an ATS-style skills match for a resume and vacancy."""
    return match_job(resume_text, job_description)
