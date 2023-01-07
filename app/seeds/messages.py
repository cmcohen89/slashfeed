from app.models import db, Message, environment
import datetime

def seed_messages():
    message1 = Message(
        message='Whoa, this chat feature is pretty cool!',
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=49),
        read=True
    )

    message2 = Message(
        message='Yeah, I love it! What should we talk about?',
        user_id=2,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=55),
        read=True
    )

    message7 = Message(
        message='Probably nothing because making seeds is the worst!',
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4),
        read=True
    )

    message9 = Message(
        message="Tell me about it! I'm in the middle of doing it right now!",
        user_id=2,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4),
        read=True
    )

    message10 = Message(
        message="Me too lol",
        user_id=1,
        message_thread_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=4),
        read=True
    )


    message3 = Message(
        message='dude did you watch Severance? that show is freaking amazing',
        user_id=1,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=23, second=49),
        read=True
    )

    message4 = Message(
        message='oh man I havent yet but ive heard rly good things',
        user_id=3,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=24, second=49),
        read=True
    )

    message8 = Message(
        message='pshhhh consider this our breakup',
        user_id=1,
        message_thread_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=24, second=59),
        read=True
    )


    message5 = Message(
        message='This is the first message on the newest thread.',
        user_id=2,
        message_thread_id=3,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=25, second=49),
        read=True
    )

    message6 = Message(
        message='This is the second message on that newest thread.',
        user_id=3,
        message_thread_id=3,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=26, second=49),
        read=True
    )

    message11 = Message(
        message="dude it's been forever since we've played fortnite! let's load it up tonight",
        user_id=4,
        message_thread_id=4,
        created_at=datetime.datetime(2023, 1, 4, hour=12, minute=26, second=12),
        read=True
    )
    message12 = Message(
        message="Oh heck yes, you know I'm always down to fork a knife",
        user_id=1,
        message_thread_id=4,
        created_at=datetime.datetime(2023, 1, 4, hour=12, minute=27, second=1),
        read=True
    )
    message13 = Message(
        message="hahah no build mode ftwwwwww",
        user_id=4,
        message_thread_id=4,
        created_at=datetime.datetime(2023, 1, 4, hour=12, minute=28, second=33),
        read=True
    )
    message14 = Message(
        message="for realz. maybe hop on around 7?",
        user_id=1,
        message_thread_id=4,
        created_at=datetime.datetime(2023, 1, 4, hour=12, minute=28, second=59),
        read=True
    )
    message15 = Message(
        message="sounds good bromigo!",
        user_id=4,
        message_thread_id=4,
        created_at=datetime.datetime(2023, 1, 4, hour=12, minute=29, second=49),
        read=True
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
    db.session.add(message11)
    db.session.add(message12)
    db.session.add(message13)
    db.session.add(message14)
    db.session.add(message15)
    db.session.commit()

def undo_messages():
    if environment == "production":
            db.session.execute(f"TRUNCATE table messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM messages")
        db.session.commit()
