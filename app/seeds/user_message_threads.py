from app.models import db, MessageThread, User, environment

def seed_chats():
    thread2 = MessageThread.query.get(2)
    thread1 = MessageThread.query.get(1)
    thread3 = MessageThread.query.get(3)
    thread4 = MessageThread.query.get(4)

    demo = User.query.get(1)
    jamie = User.query.get(2)
    jordan = User.query.get(3)
    nick = User.query.get(4)

    demo.user_chats.append(thread1)
    demo.user_chats.append(thread2)
    demo.user_chats.append(thread4)
    jamie.user_chats.append(thread1)
    jamie.user_chats.append(thread3)
    jordan.user_chats.append(thread2)
    jordan.user_chats.append(thread3)
    nick.user_chats.append(thread4)

    db.session.commit()


def undo_chats():
    if environment == "production":
        db.session.execute(f"TRUNCATE table user_message_threads RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_message_threads")
        db.session.commit()
