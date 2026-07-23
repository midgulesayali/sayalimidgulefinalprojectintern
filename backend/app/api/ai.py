from pydantic import BaseModel, Field
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.middleware.auth import get_current_user
from app.models.chat import ChatMessage
from app.models.user import User
from app.services.ai_services import generate_career_response

router = APIRouter(prefix="/ai", tags=["AI assistant"])


class ChatRequest(BaseModel):
    message: str = Field(min_length=2, max_length=4000)
    context: str = Field(default="", max_length=12000)


@router.post("/chat")
def chat(
    payload: ChatRequest,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    result = generate_career_response(payload.message, payload.context)
    message = ChatMessage(
        user_id=user.id,
        prompt=payload.message,
        response=result["response"],
        provider=result["provider"],
    )
    db.add(message)
    db.commit()
    db.refresh(message)
    return {"id": message.id, **result}


@router.get("/history")
def history(
    limit: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    messages = (
        db.query(ChatMessage)
        .filter(ChatMessage.user_id == user.id)
        .order_by(ChatMessage.id.desc())
        .limit(limit)
        .all()
    )
    return [
        {
            "id": message.id,
            "prompt": message.prompt,
            "response": message.response,
            "provider": message.provider,
            "created_at": message.created_at,
        }
        for message in reversed(messages)
    ]
