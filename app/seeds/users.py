from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demovius',
        last_name='Userian',
        username='demolition23',
        password='password',
        email='demo@aa.io',
        profile_img_url='https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg')
    jamie = User(
        first_name='Jamie',
        last_name='Cohen',
        username='idreamofjamie19',
        password='password',
        email='jamie@aa.io',
        profile_img_url='https://i.imgur.com/EQSmsnt.png')
    jordan = User(
        first_name='Jordan',
        last_name='Litman',
        username='jdawg1185',
        password='password',
        email='jordan@aa.io',
        profile_img_url='https://i.imgur.com/07thret.png')
    nick = User(
        first_name='Nick',
        last_name='Cohen',
        username='shokture1230',
        password='password',
        email='nick@aa.io',
        profile_img_url='https://media.licdn.com/dms/image/C5603AQFp3yDDqT9fwQ/profile-displayphoto-shrink_800_800/0/1608574971204?e=1677110400&v=beta&t=frlmljusW9xrPKlZsVOS--JYLDY4ZkEs5uk6U-p3n9Y')
    maria = User(
        first_name='Maria',
        last_name='Sanchez',
        username='docmaria4you',
        password='password',
        email='maria@aa.io',
        profile_img_url='https://mariasanchezshow.com/wp-content/uploads/2013/08/MariaMedium.jpg')
    shaina = User(
        first_name='Shaina',
        last_name='Cohen',
        username='spicychai',
        password='password',
        email='shaina@aa.io',
        profile_img_url='http://archive.advertisingweek.com/images/userfiles/images/events/aw/2020/speakers/shainacohen.jpeg')
    brennen = User(
        first_name='Brennen',
        last_name='Wright',
        username='cooldude93',
        password='password',
        email='brennen@aa.io',
        profile_img_url='https://i.imgur.com/oFumwEg.png')
    andrew = User(
        first_name='Andrew',
        last_name='Stalzer',
        username='dirtiestange',
        password='password',
        email='andrew@aa.io',
        profile_img_url='https://i.imgur.com/iM06NG6.png')
    sara = User(
        first_name='Sara',
        last_name='Doughlop',
        username='doughlopopotamus',
        password='password',
        email='sara@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/85785443?v=4')
    alex = User(
        first_name='Alex',
        last_name='Cohen',
        username='okfineletsgo',
        password='password',
        email='alex@aa.io',
        profile_img_url='https://media-exp1.licdn.com/dms/image/C5603AQH8zTZR-AHKcA/profile-displayphoto-shrink_800_800/0/1623691175942?e=2147483647&v=beta&t=WjHHR31zIpLStZwWeB7edwEeY86qa3_SzXCG57NhKfU')
    marty = User(
        first_name='Marty',
        last_name='Cohen',
        username='martinblair52',
        password='password',
        email='marty@aa.io',
        profile_img_url='https://resizing.flixster.com/4ax8zwN5PK9WMqVSPqInVL5ixGE=/218x280/v2/https://flxt.tmsimg.com/assets/87979_v9_ba.jpg')
    leslie = User(
        first_name='Leslie',
        last_name='Levine',
        username='lllwerkz1212',
        password='password',
        email='leslie@aa.io',
        profile_img_url='https://www.licensingworks.us/wp-content/uploads/2020/05/Leslie4site2-300x300.png')
    katharine = User(
        first_name='Katharine',
        last_name='Cohen',
        username='kitty1024',
        password='password',
        email='katharine@aa.io',
        profile_img_url='https://i.imgur.com/QyM7d20.png')
    matt = User(
        first_name='Matt',
        last_name='Kleinsmith',
        username='mattymattK29',
        password='password',
        email='matt@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/8968171?v=4')
    gray = User(
        first_name='Gray',
        last_name='Nance',
        username='grayfathergrayson584',
        password='password',
        email='gray@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/98988710?v=4')
    mike = User(
        first_name='Mike',
        last_name='Miller',
        username='MichaelLichael39',
        password='password',
        email='mike@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/107960217?v=4')
    jacob = User(
        first_name='Jacob',
        last_name='Lauxman',
        username='jabocandroll25',
        password='password',
        email='jacob@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/105457720?v=4')
    tyler = User(
        first_name='Tyler',
        last_name='Short',
        username='tyguy98',
        password='password',
        email='tyler@aa.io',
        profile_img_url='https://i.imgur.com/njwHoOJ.png')


    db.session.add(demo)
    db.session.add(jamie)
    db.session.add(jordan)
    db.session.add(nick)
    db.session.add(maria)
    db.session.add(shaina)
    db.session.add(brennen)
    db.session.add(andrew)
    db.session.add(sara)
    db.session.add(alex)
    db.session.add(katharine)
    db.session.add(marty)
    db.session.add(leslie)
    db.session.add(matt)
    db.session.add(gray)
    db.session.add(mike)
    db.session.add(jacob)
    db.session.add(tyler)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("DELETE FROM users")
    db.session.commit()
