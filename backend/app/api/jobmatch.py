from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.middleware.auth import get_current_user
from app.models.job import JobMatch
from app.models.resume import Resume
from app.models.user import User
from app.schemas.job_schema import JobMatchRequest
from app.services.ats_service import calculate_ats_match

router = APIRouter(prefix="/job-match", tags=["Job matching"])
@router.post("")
def create_match(payload: JobMatchRequest, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    text = payload.resume_text
    if payload.resume_id:
        resume = db.query(Resume).filter_by(id=payload.resume_id, user_id=user.id).first()
        if not resume: raise HTTPException(404, "Resume not found.")
        text = resume.content
    if not text or not text.strip(): raise HTTPException(400, "Provide resume_text or a resume_id.")
    result = calculate_ats_match(text, payload.job_description)
    record = JobMatch(user_id=user.id, resume_id=payload.resume_id, job_title=payload.job_title, job_description=payload.job_description, score=result["score"], matched_skills=", ".join(result["matched_skills"]), missing_skills=", ".join(result["missing_skills"]))
    db.add(record); db.commit(); db.refresh(record)
    return {"id": record.id, **result}
