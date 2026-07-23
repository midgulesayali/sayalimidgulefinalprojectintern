def browser_speech_config(text: str) -> dict:
    """Response contract for the browser Web Speech API's speechSynthesis."""
    return {"text": text, "lang": "en-US", "rate": 1.0, "pitch": 1.0}
