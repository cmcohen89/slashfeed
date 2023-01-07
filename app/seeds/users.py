from app.models import db, User, environment


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
        username='MichaelLichael69',
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

    chris = User(
        first_name='Christopher',
        last_name='Cohen',
        username='Christobear89',
        password='password',
        email='chris@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/103705214?v=4'
    )

    huishi = User(
        first_name='Huishi',
        last_name='An',
        username='huishi329',
        password='password',
        email='huishi@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/98060462?v=4'
    )

    kevin = User(
        first_name='Kevin',
        last_name='Vu',
        username='kevvu788',
        password='password',
        email='kevin@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/106125123?v=4'
    )

    kat = User(
        first_name='Kat',
        last_name='Mai',
        username='koooolios',
        password='password',
        email='kat@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03R1GRJV6J-1b45dada676c-512'
    )

    ricardo = User(
        first_name='Ricardo',
        last_name='Lopez',
        username='ricardolo748',
        password='password',
        email='ricardo@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03DZ1HHTBM-6d6d36f4974a-512'
    )

    brian = User(
        first_name='Brian',
        last_name='Kiesel',
        username='bklounger837',
        password='password',
        email='brian@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03N7LURFNJ-fdcb32c95987-512'
    )

    dave = User(
        first_name='Dave',
        last_name='Sexton',
        username='dmoney986',
        password='password',
        email='dave@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03PF2L71KP-0480213a3509-512'
    )

    douglas = User(
        first_name='Douglas',
        last_name='Loizzo',
        username='dougzzo26',
        password='password',
        email='doughlas@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03PY8X5T7G-8dd0fe82e66f-512'
    )

    efrain = User(
        first_name='Efrain',
        last_name='Saldana',
        username='GifwithaGee36',
        password='password',
        email='efrain@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03P3C0LJLF-5d2a89e8c5c8-512'
    )

    joonil = User(
        first_name='Joonil',
        last_name='Kim',
        username='hydralisk1',
        password='password',
        email='joonil@aa.io',
        profile_img_url='https://avatars.githubusercontent.com/u/11830583?v=4'
    )

    linus = User(
        first_name='Linus',
        last_name='Huynh',
        username='kinglinus784',
        password='password',
        email='linus@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03QXDLQ830-a45cf021bb60-512'
    )

    michael = User(
        first_name='Michael',
        last_name='Lee',
        username='fanman23',
        password='password',
        email='michael@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03QTHNN6H5-5ee0e822511e-512'
    )

    preston = User(
        first_name='Preston',
        last_name='Prince',
        username='princepreston284',
        password='password',
        email='preston@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03PHVAV0UA-abbc8490d32d-512'
    )

    trevor = User(
        first_name='Trevor',
        last_name='Moore',
        username='shreddertrevor48',
        password='password',
        email='trevor@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03H55JSSCB-bdc5abbd7a50-512'
    )

    riley = User(
        first_name='Riley',
        last_name='Litman',
        username='PODVII',
        password='password',
        email='riley@aa.io',
        profile_img_url='https://image.tmdb.org/t/p/w235_and_h235_face/2LwIfgJKiFwz236DoLEJld0SHFx.jpg'
    )

    hannah = User(
        first_name='Hannah',
        last_name='Litman',
        username='hannahbobannah584',
        password='password',
        email='hannah@aa.io',
        profile_img_url='https://static.wixstatic.com/media/dce20a_8e56287472ff4c369d7c2fd803dec5a0.jpeg/v1/crop/x_157,y_0,w_529,h_682/fill/w_528,h_648,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/hObUAhUm6isL6NRiEHyga3kock5OC5cvx6rENT2T.jpeg'
    )

    prap = User(
        first_name='Prapassorn',
        last_name='Tinnabavorn',
        username='prappatherappa98',
        password='password',
        email='prap@aa.io',
        profile_img_url='https://ca.slack-edge.com/T03GU501J-U03QTHQF11D-ea2368382226-512'
    )

    arko = User(
        first_name='Arko',
        last_name='Chakrabarty',
        username='arkthelad00',
        password='password',
        email='arko@aa.io',
        profile_img_url='https://i.imgur.com/ur7uTrh.png'
    )

    users = [
        demo, jamie, jordan, nick, maria, shaina, brennen, andrew, sara, alex, katharine,
        marty, leslie, matt, gray, mike, jacob, tyler, chris, huishi, kevin, kat, ricardo,
        brian, dave, douglas, efrain, joonil, linus, michael, preston, trevor, riley, hannah,
        prap, arko
    ]

    [db.session.add(user) for user in users]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    if environment == "production":
            db.session.execute(f"TRUNCATE table users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        db.session.commit()
