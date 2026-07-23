from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.pool import StaticPool
from dotenv import load_dotenv
import os
from urllib.parse import quote_plus

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL and os.getenv("DB_HOST"):
    db_user = quote_plus(os.getenv("DB_USER", ""))
    db_password = quote_plus(os.getenv("DB_PASSWORD", ""))
    db_host = os.getenv("DB_HOST")
    db_port = os.getenv("DB_PORT", "3306")
    db_name = quote_plus(os.getenv("DB_NAME", "career_ai"))
    DATABASE_URL = f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"

DATABASE_URL = DATABASE_URL or "sqlite:///./career_ai.db"

engine_options = {"echo": os.getenv("SQL_ECHO", "false").lower() == "true"}
if DATABASE_URL.startswith("sqlite"):
    engine_options["connect_args"] = {"check_same_thread": False}
    if DATABASE_URL == "sqlite://":
        engine_options["poolclass"] = StaticPool
engine = create_engine(DATABASE_URL, **engine_options)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
