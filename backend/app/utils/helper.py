from datetime import datetime, timezone


def utc_now() -> datetime:
    """Return a timezone-aware UTC timestamp for application-level metadata."""
    return datetime.now(timezone.utc)
