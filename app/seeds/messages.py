from app.models import db, Message

def seed_messages():
    message1 = Message(
        message='This is the first message.',
        user_id=1,
        message_thread_id=1,
    )

    message2 = Message(
        message='This is the second message.',
        user_id=2,
        message_thread_id=1,
    )


    message3 = Message(
        message='This is the first message on a new thread.',
        user_id=1,
        message_thread_id=2,
    )

    message4 = Message(
        message='This is the second message on that new thread.',
        user_id=3,
        message_thread_id=2,
    )


    message5 = Message(
        message='This is the first message on the newest thread.',
        user_id=2,
        message_thread_id=3,
    )

    message6 = Message(
        message='This is the second message on that newest thread.',
        user_id=3,
        message_thread_id=3,
    )

    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)
    db.session.commit()

def undo_messages():
    db.session.execute("DELETE FROM messages")
    db.session.commit()
