-- MySQL 8+ schema for the AI Resume Career Assistance backend.
-- Connect to the database named by DB_NAME in backend/.env before running this file.

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS resumes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  filename VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY ix_resumes_user_id (user_id),
  CONSTRAINT fk_resumes_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS job_matches (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  resume_id INT NULL,
  job_title VARCHAR(200) NOT NULL,
  job_description TEXT NOT NULL,
  score INT NOT NULL,
  matched_skills TEXT NOT NULL,
  missing_skills TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY ix_job_matches_user_id (user_id),
  KEY ix_job_matches_resume_id (resume_id),
  CONSTRAINT fk_job_matches_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_job_matches_resume_id FOREIGN KEY (resume_id) REFERENCES resumes(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS interview_sessions (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  role VARCHAR(200) NOT NULL,
  questions TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY ix_interview_sessions_user_id (user_id),
  CONSTRAINT fk_interview_sessions_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS chat_messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  prompt TEXT NOT NULL,
  response TEXT NOT NULL,
  provider TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY ix_chat_messages_user_id (user_id),
  CONSTRAINT fk_chat_messages_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
