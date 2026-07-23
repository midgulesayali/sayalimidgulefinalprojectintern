from pydantic import BaseModel, Field
from fastapi import APIRouter, Depends
from app.middleware.auth import get_current_user
from app.models.user import User
router = APIRouter(prefix="/cover-letters", tags=["Cover letters"])
class CoverLetterRequest(BaseModel):
    company: str = Field(min_length=2, max_length=200)
    role: str = Field(min_length=2, max_length=200)
    highlights: list[str] = Field(default_factory=list)
@router.post("/generate")
def generate(payload: CoverLetterRequest, user: User = Depends(get_current_user)):
    highlights = "; ".join(payload.highlights) or "my relevant experience and commitment to delivering results"
    return {"cover_letter": f"Dear Hiring Team at {payload.company},\n\nI am excited to apply for the {payload.role} position. My background demonstrates {highlights}. I would welcome the opportunity to bring this experience to {payload.company} and contribute to your team.\n\nThank you for your consideration.\n\nSincerely,\n{user.name}"}
