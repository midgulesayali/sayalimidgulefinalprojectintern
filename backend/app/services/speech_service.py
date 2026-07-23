import os

from fastapi import HTTPException, UploadFile

SUPPORTED_AUDIO_TYPES = {
    "audio/mpeg", "audio/mp3", "audio/mp4", "audio/m4a", "audio/wav", "audio/x-wav", "audio/webm"
}


async def transcribe_audio(audio: UploadFile) -> str:
    """Transcribe a browser-recorded audio file with Groq Whisper."""
    api_key = os.getenv("GROQ_API_KEY", "")
    if not api_key or api_key == "YOUR_GROQ_API_KEY":
        raise HTTPException(503, "Speech transcription requires a configured GROQ_API_KEY.")
    if not audio.filename:
        raise HTTPException(400, "An audio filename is required.")
    if audio.content_type and audio.content_type.lower() not in SUPPORTED_AUDIO_TYPES:
        raise HTTPException(415, "Supported audio formats are MP3, MP4, M4A, WAV, and WebM.")

    content = await audio.read()
    if not content:
        raise HTTPException(400, "The audio file is empty.")
    if len(content) > 25 * 1024 * 1024:
        raise HTTPException(413, "Audio must be 25 MB or smaller.")

    try:
        from groq import Groq

        transcription = Groq(api_key=api_key).audio.transcriptions.create(
            file=(audio.filename, content),
            model=os.getenv("GROQ_TRANSCRIPTION_MODEL", "whisper-large-v3-turbo"),
            response_format="json",
        )
        text = getattr(transcription, "text", "")
    except Exception as exc:
        raise HTTPException(502, "The transcription provider could not process this audio.") from exc

    if not text.strip():
        raise HTTPException(422, "No speech could be transcribed from the audio.")
    return text.strip()
