from pydantic import BaseModel, EmailStr


class Register(BaseModel):
    fullname: str
    email: EmailStr
    password: str


class Login(BaseModel):
    email: EmailStr
    password: str


class ResumeResponse(BaseModel):
    filename: str
    message: str


class ResumeAnalysisResponse(BaseModel):
    score: int
    strengths: str
    weaknesses: str
    suggestions: str


class CareerResponse(BaseModel):
    career: str
    skills: str
    roadmap: str


class InterviewRequest(BaseModel):
    role: str


class InterviewResponse(BaseModel):
    questions: str