from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.middleware.auth import get_current_user
from app.models.resume import Resume
from app.models.user import User
from app.services.pdf_service import extract_pdf_text
from app.services.resume_service import analyze_resume

router = APIRouter(prefix="/resumes", tags=["Resumes"])

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...), db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    if not file.filename or not file.filename.lower().endswith((".pdf", ".txt")):
        raise HTTPException(400, "Upload a PDF or plain-text resume.")
    content = await file.read()
    if len(content) > 5 * 1024 * 1024:
        raise HTTPException(413, "File must be 5 MB or smaller.")
    try:
        text = extract_pdf_text(content) if file.filename.lower().endswith(".pdf") else content.decode("utf-8")
    except Exception as exc:
        raise HTTPException(400, "Could not read the uploaded resume.") from exc
    if not text.strip():
        raise HTTPException(400, "The resume contains no extractable text.")
    resume = Resume(user_id=user.id, filename=file.filename, content=text)
    db.add(resume); db.commit(); db.refresh(resume)
    return {"id": resume.id, "filename": resume.filename, "analysis": analyze_resume(text)}

@router.get("")
def list_resumes(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return [{"id": r.id, "filename": r.filename, "created_at": r.created_at} for r in db.query(Resume).filter_by(user_id=user.id).order_by(Resume.id.desc())]

@router.get("/{resume_id}/analysis")
def resume_analysis(resume_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    resume = db.query(Resume).filter_by(id=resume_id, user_id=user.id).first()
    if not resume: raise HTTPException(404, "Resume not found.")
    return analyze_resume(resume.content)
