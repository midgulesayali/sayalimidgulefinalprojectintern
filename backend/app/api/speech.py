from fastapi import APIRouter, Depends, File, UploadFile

from app.middleware.auth import get_current_user
from app.models.user import User
from app.services.speech_service import transcribe_audio

router = APIRouter(prefix="/speech", tags=["Speech"])


@router.post("/transcribe")
async def transcribe(
    audio: UploadFile = File(...),
    user: User = Depends(get_current_user),
):
    return {"transcript": await transcribe_audio(audio)}
