from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.sql import func
from app.database.database import Base


class JobMatch(Base):
    __tablename__ = "job_matches"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    resume_id = Column(Integer, ForeignKey("resumes.id"), nullable=True)
    job_title = Column(String(200), nullable=False)
    job_description = Column(Text, nullable=False)
    score = Column(Integer, nullable=False)
    matched_skills = Column(Text, nullable=False, default="")
    missing_skills = Column(Text, nullable=False, default="")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
