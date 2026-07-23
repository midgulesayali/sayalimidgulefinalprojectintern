from pydantic import BaseModel, Field
from fastapi import APIRouter, Depends
from app.middleware.auth import get_current_user
from app.models.user import User
from app.services.career_service import extract_skills, recommend_careers
router = APIRouter(prefix="/career", tags=["Career"])
class CareerRequest(BaseModel):
    skills: list[str] = Field(default_factory=list)
    resume_text: str = ""
@router.post("/recommendations")
def recommendations(payload: CareerRequest, user: User = Depends(get_current_user)):
    skills = sorted(set(s.lower().strip() for s in payload.skills if s.strip()) | set(extract_skills(payload.resume_text)))
    return {"detected_skills": skills, "recommendations": recommend_careers(skills)}
