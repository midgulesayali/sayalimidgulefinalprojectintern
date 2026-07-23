def generate_interview_questions(role: str) -> list[str]:
    role = role.strip()
    return [
        f"Tell me about yourself and why you want to work as a {role}.",
        f"Describe a challenging {role} project and your specific contribution.",
        "How do you prioritize work when requirements change?",
        "Tell me about a time you received difficult feedback.",
        f"What does success in this {role} role look like in your first 90 days?",
    ]
