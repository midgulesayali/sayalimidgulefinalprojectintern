from fastapi import APIRouter, Depends, File, Form, UploadFile
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.middleware.auth import get_current_user
from app.models.chat import ChatMessage
from app.models.user import User
from app.services.ai_services import generate_career_response
from app.services.speech_service import transcribe_audio
from app.services.voice_service import browser_speech_config

router = APIRouter(prefix="/voice", tags=["Voice assistant"])


@router.post("/assistant")
async def voice_assistant(
    audio: UploadFile = File(...),
    context: str = Form(default=""),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    transcript = await transcribe_audio(audio)
    result = generate_career_response(transcript, context)
    message = ChatMessage(
        user_id=user.id,
        prompt=transcript,
        response=result["response"],
        provider=result["provider"],
    )
    db.add(message)
    db.commit()
    db.refresh(message)
    return {
        "id": message.id,
        "transcript": transcript,
        "response": result["response"],
        "provider": result["provider"],
        "speech": browser_speech_config(result["response"]),
    }
