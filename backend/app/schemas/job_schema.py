from pydantic import BaseModel, Field


class JobMatchRequest(BaseModel):
    job_title: str = Field(min_length=2, max_length=200)
    job_description: str = Field(min_length=20)
    resume_id: int | None = None
    resume_text: str | None = None


class JobMatchResult(BaseModel):
    id: int
    score: int = Field(ge=0, le=100)
    matched_skills: list[str]
    missing_skills: list[str]
