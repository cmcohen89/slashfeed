from app.models import db, Message, environment
import datetime

def seed_messages():
    message1 = Message(
        message='Whoa, this chat feature is pretty cool!',
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=49)
    )

    message2 = Message(
        message='Yeah, I love it! What should we talk about?',
        user_id=2,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=55)
    )

    message7 = Message(
        message='Probably nothing because making seeds is the worst!',
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4)
    )

    message9 = Message(
        message="Tell me about it! I'm in the middle of doing it right now!",
        user_id=2,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4)
    )

    message10 = Message(
        message="Me too lol",
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4)
    )


    message3 = Message(
        message='dude did you watch Severance? that show is freaking amazing',
        user_id=1,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=49)
    )

    message4 = Message(
        message='oh man I havent yet but ive heard rly good things',
        user_id=3,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=24, second=49)
    )

    message8 = Message(
        message='pshhhh consider this our breakup',
        user_id=1,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=24, second=59)
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
    db.session.add(message7)
    db.session.add(message8)
    db.session.add(message9)
    db.session.add(message10)
    db.session.commit()

def undo_messages():
    if environment == "production":
            db.session.execute(f"TRUNCATE table messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM messages")
        db.session.commit()
