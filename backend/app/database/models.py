from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    fullname = Column(String(100))

    email = Column(String(100), unique=True, index=True)

    password = Column(String(200))

    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True)

    user_id = Column(Integer)

    filename = Column(String(200))

    resume_text = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())


class ResumeAnalysis(Base):
    __tablename__ = "resume_analysis"

    id = Column(Integer, primary_key=True)

    user_id = Column(Integer)

    score = Column(Integer)

    strengths = Column(Text)

    weaknesses = Column(Text)

    suggestions = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())


class CareerRecommendation(Base):
    __tablename__ = "career_recommendation"

    id = Column(Integer, primary_key=True)

    user_id = Column(Integer)

    career = Column(String(200))

    skills = Column(Text)

    roadmap = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())


class InterviewQuestion(Base):
    __tablename__ = "interview_questions"

    id = Column(Integer, primary_key=True)

    user_id = Column(Integer)

    role = Column(String(100))

    questions = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())