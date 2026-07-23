from datetime import datetime
from pydantic import BaseModel, Field


class ResumeSummary(BaseModel):
    id: int
    filename: str
    created_at: datetime | None = None


class ResumeAnalysis(BaseModel):
    score: int = Field(ge=0, le=100)
    skills: list[str]
    strengths: list[str]
    weaknesses: list[str]
    suggestions: list[str]
