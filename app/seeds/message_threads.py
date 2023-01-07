from app.models import db, MessageThread, environment

def seed_message_threads():
    message_thread1 = MessageThread(
    )

    message_thread2 = MessageThread(
    )

    message_thread3 = MessageThread(
    )

    message_thread4 = MessageThread(
    )

    db.session.add(message_thread1)
    db.session.add(message_thread2)
    db.session.add(message_thread3)
    db.session.add(message_thread4)
    db.session.commit()

def undo_message_threads():
    if environment == "production":
        db.session.execute(f"TRUNCATE table message_threads RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM message_threads")
        db.session.commit()
