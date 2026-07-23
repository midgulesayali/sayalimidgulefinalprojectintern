from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.init_db import *
from app.api.auth import router as auth_router
from app.api.resume import router as resume_router
from app.api.jobmatch import router as jobmatch_router
from app.api.career import router as career_router
from app.api.interview import router as interview_router
from app.api.coverletter import router as coverletter_router
from app.api.ai import router as ai_router
from app.api.speech import router as speech_router
from app.api.voice import router as voice_router


app = FastAPI(
    title="AI Resume Career Assistance",
    version="1.0"
)

origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(jobmatch_router)
app.include_router(career_router)
app.include_router(interview_router)
app.include_router(coverletter_router)
app.include_router(ai_router)
app.include_router(speech_router)
app.include_router(voice_router)

@app.get("/")
def home():
    return {
        "message": "AI Resume Career Assistance API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }
