import json
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.middleware.auth import get_current_user
from app.models.interview import InterviewSession
from app.models.user import User
from app.schemas.interview_schema import InterviewRequest
from app.services.interview_service import generate_interview_questions
router = APIRouter(prefix="/interviews", tags=["Interviews"])
@router.post("/questions")
def questions(payload: InterviewRequest, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    role = payload.role.strip()
    result = generate_interview_questions(role)
    session = InterviewSession(user_id=user.id, role=role, questions=json.dumps(result)); db.add(session); db.commit(); db.refresh(session)
    return {"id": session.id, "role": role, "questions": result}
