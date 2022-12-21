from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demovius',
        last_name='Userian',
        username='demolition23',
        password='password',
        email='demo@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    jamie = User(
        first_name='Jamie',
        last_name='Cohen',
        username='idreamofjamie19',
        password='password',
        email='jamie@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    jordan = User(
        first_name='Jordan',
        last_name='Litman',
        username='jdawg1185',
        password='password',
        email='jordan@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    steve = User(
        first_name='Steve',
        last_name='Craftman',
        username='stevie367',
        password='password',
        email='steve@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    maria = User(
        first_name='Maria',
        last_name='Sanchez',
        username='docmaria4you',
        password='password',
        email='maria@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    shaina = User(
        first_name='Shaina',
        last_name='Schwab',
        username='spicychai',
        password='password',
        email='shaina@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    brennen = User(
        first_name='Brennen',
        last_name='Wright',
        username='cooldude93',
        password='password',
        email='brennen@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    andrew = User(
        first_name='Andrew',
        last_name='Stalzer',
        username='dirtiestangeXO',
        password='password',
        email='andrew@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
    sara = User(
        first_name='Sara',
        last_name='Doughlop',
        username='doughloppopatumus',
        password='password',
        email='sara@aa.io',
        profile_img_url='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')

    db.session.add(demo)
    db.session.add(jamie)
    db.session.add(jordan)
    db.session.add(steve)
    db.session.add(maria)
    db.session.add(shaina)
    db.session.add(brennen)
    db.session.add(andrew)
    db.session.add(sara)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("DELETE FROM users")
    db.session.commit()
