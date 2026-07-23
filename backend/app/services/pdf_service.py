from io import BytesIO
from pypdf import PdfReader


def extract_pdf_text(content: bytes) -> str:
    return "\n".join(page.extract_text() or "" for page in PdfReader(BytesIO(content)).pages).strip()
