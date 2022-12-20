from app.models import db, MessageThread

def seed_message_threads():
    message_thread1 = MessageThread(
        user1_id=1,
        user2_id=2,
    )

    message_thread2 = MessageThread(
        user1_id=1,
        user2_id=3,
    )

    message_thread3 = MessageThread(
        user1_id=2,
        user2_id=3,
    )

    db.session.add(message_thread1)
    db.session.add(message_thread2)
    db.session.add(message_thread3)
    db.session.commit()

def undo_message_threads():
    db.session.execute("DELETE FROM message_threads")
    db.session.commit()
