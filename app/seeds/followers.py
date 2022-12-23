from app.models import db, User, environment

def seed_followers():
    demo = User.query.get(1)
    jamie = User.query.get(2)
    jordan = User.query.get(3)
    nick = User.query.get(4)
    maria = User.query.get(5)
    shaina = User.query.get(6)
    brennen = User.query.get(7)
    andrew = User.query.get(8)
    sara = User.query.get(9)
    alex = User.query.get(10)
    katharine = User.query.get(11)
    marty = User.query.get(12)
    leslie = User.query.get(13)
    matt = User.query.get(14)
    gray = User.query.get(15)
    mike = User.query.get(16)
    jacob = User.query.get(17)
    tyler = User.query.get(18)

    demo.followed.extend([jamie, jordan, nick, maria, shaina, brennen, andrew, sara])
    jordan.followed.extend([nick, andrew, alex, jamie, demo])
    jamie.followed.extend([nick, alex, maria, jordan, demo, katharine, marty, leslie, shaina, demo, brennen])
    nick.followed.extend([jamie, jordan, alex, maria, shaina, andrew, marty, demo, leslie])
    maria.followed.extend([nick, alex, jamie, shaina, katharine])
    shaina.followed.extend([nick, alex, jamie, jordan, maria, andrew, katharine])
    brennen.followed.extend([jamie])
    andrew.followed.extend([jordan, nick, alex, shaina, jamie, katharine])
    sara.followed.extend([matt, gray, mike, jacob, tyler, demo])
    alex.followed.extend([nick, jordan, maria, marty, leslie, shaina, jamie, andrew])
    katharine.followed.extend([nick, alex, jamie, shaina, maria, marty, leslie, jordan, andrew])
    marty.followed.extend([leslie, nick, alex, jamie, shaina])
    leslie.followed.extend([marty, nick, alex, jamie, shaina])
    matt.followed.extend([sara, gray, mike, jacob, tyler, demo])
    gray.followed.extend([sara, matt, mike, jacob, tyler, demo])
    mike.followed.extend([sara, matt, gray, jacob, tyler, demo])
    jacob.followed.extend([sara, matt, gray, mike, tyler, demo])
    tyler.followed.extend([sara, matt, gray, mike, jacob, demo])

    db.session.commit()

def undo_followers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table followers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM followers")
        db.session.commit()
