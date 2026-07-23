from app.database.database import Base, engine

from app.models import chat, interview, job, resume, user

Base.metadata.create_all(bind=engine)
