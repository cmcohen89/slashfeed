from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        username='Demo',
        password='password',
        email='demo@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    jamie = User(
        first_name='Jamie',
        last_name='Cohen',
        username='jamie',
        password='password',
        email='jamie@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    jordan = User(
        first_name='Jordan',
        last_name='Litman',
        username='jordan',
        password='password',
        email='jordan@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')

    db.session.add(demo)
    db.session.add(jamie)
    db.session.add(jordan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("DELETE FROM users")
    db.session.commit()
