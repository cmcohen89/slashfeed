from app.models import db, Message, environment
import datetime

def seed_messages():
    message1 = Message(
        message='This is the first message.',
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=49)
    )

    message2 = Message(
        message='This is the second message.',
        user_id=2,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=55)
    )


    message3 = Message(
        message='This is the first message on a new thread.',
        user_id=1,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=49)
    )

    message4 = Message(
        message='This is the second message on that new thread.',
        user_id=3,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=24, second=49)
    )


    message5 = Message(
        message='This is the first message on the newest thread.',
        user_id=2,
        message_thread_id=3,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=25, second=49)
    )

    message6 = Message(
        message='This is the second message on that newest thread.',
        user_id=3,
        message_thread_id=3,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=26, second=49)
    )

    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)
    db.session.commit()

def undo_messages():
    if environment == "production":
            db.session.execute(f"TRUNCATE table messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM messages")
        db.session.commit()
