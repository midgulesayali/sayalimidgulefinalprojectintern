from pydantic import BaseModel, Field


class InterviewRequest(BaseModel):
    role: str = Field(min_length=2, max_length=200)


class InterviewQuestionSet(BaseModel):
    id: int
    role: str
    questions: list[str]
