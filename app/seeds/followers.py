from app.models import db, User

def seed_followers():
    demo = User.query.get(1)
    jamie = User.query.get(2)
    jordan = User.query.get(3)

    demo.followed.append(jamie)
    jordan.followed.append(jamie)
    jamie.followed.append(jordan)


    db.session.commit()

def undo_followers():
    db.session.execute("DELETE FROM followers")
    db.session.commit()
