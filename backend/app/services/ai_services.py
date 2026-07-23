import os


def generate_career_response(message: str, context: str = "") -> dict:
    """Generate career guidance using Groq when a valid key is configured.

    A local fallback keeps the endpoint usable without a third-party account.
    """
    prompt = (
        "You are a concise, practical career assistant. Give actionable advice, "
        "use bullet points when helpful, and do not invent experience.\n"
        f"Candidate context: {context or 'Not provided'}\n"
        f"User question: {message}"
    )
    api_key = os.getenv("GROQ_API_KEY", "")
    if api_key and api_key != "YOUR_GROQ_API_KEY":
        try:
            from groq import Groq

            completion = Groq(api_key=api_key).chat.completions.create(
                model=os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile"),
                messages=[{"role": "user", "content": prompt}],
                temperature=0.4,
                max_tokens=700,
            )
            response = completion.choices[0].message.content
            if response:
                return {"response": response, "provider": "groq"}
        except Exception:
            # A bad key or a temporarily unavailable provider should not take
            # down the rest of the career-assistance workflow.
            pass

    return {
        "response": (
            f"For: {message.strip()}\n\n"
            "Start by identifying the required skills, map them to your current "
            "experience, and choose one measurable project that demonstrates the largest gap. "
            "Tailor your resume with the exact job-relevant terms before applying."
        ),
        "provider": "local-fallback",
    }
