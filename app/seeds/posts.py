from app.models import db, Post

def seed_posts():
    post1 = Post(
        title='The craziest thing happened to me today! Check it out!!',
        body='You guys will never believe what happened today. I was walking down the street and an ice cream truck stopped to give me free ice cream! #blessed',
        user_id=1,
        preview_img_id=1
    )

    post2 = Post(
        title='I went to see Black Panther 2 with the wife today, it was pretty good!',
        body='I had kinda hoped it would be better, but all of Phase 4 has been fairly lackluster so I guess that is not too surprising. Looking forward to Phase 5!!',
        user_id=2,
        preview_img_id=2
    )

    post3 = Post(
        title='I love Christmas time!!! Baking during Christmas is my favorite way to spend the holiday!',
        body='I made these absolutely amazing Christmas cookies last night, we just could NOT stop eating them! I must have had at least 6 cookies...I kind of feel bad but at the same time who cares! This is what the holidays are for!',
        user_id=3,
        preview_img_id=3
    )

    post4 = Post(
        title='Oh boy do I love using this website!',
        body='I hope you guys are enjoying all the photos I have been posting! Here is another one of me with my cat.',
        user_id=4,
        preview_img_id=4
    )

    post5 = Post(
        title='How many chucks would a woodchuck chuck if a woodchuck could chuck wood?',
        body='This is the greatest mystery of our time, no one knows the answer! I have a hypothesis, leave a comment and I might share it with you!',
        user_id=5,
        preview_img_id=5
    )

    post6 = Post(
        title="At Porto's bakery in downtown LA!",
        body='Oh my gosh this is my absolute favorite spot around here. Just can not get enough!!!',
        user_id=6,
        preview_img_id=6
    )

    post7 = Post(
        title="Been hittin' the gym hard this month!",
        body="Most people are slacking off and getting fat, but not me! I'm toning up and ready to take on the new year!",
        user_id=7,
        preview_img_id=7
    )

    post8 = Post(
        title='Finally have some free time, what game should I play??',
        body="Who's been gaming a bunch recently? Can't decide what I should play, leave a comment and let me know if you have any good ideas for me!",
        user_id=8,
        preview_img_id=8
    )

    post9 = Post(
        title='I sure am getting tired of making seeds!',
        body='This is only the ninth seed on this website but man do I already feel exhausted! I need someone to automate my seed generation process...',
        user_id=9,
        preview_img_id=9
    )

    post10 = Post(
        title='Had such an awesome trip to Magic Mountain last weekend!',
        body="It's been a long time since my last trip to Six Flags, but holy crap it was a blast! I went on every single rollercoaster because the lines were pretty short. I think my favorite is still Scream, but the new Wonder Woman coaster is amazing too!",
        user_id=1,
        preview_img_id=10
    )

    post11 = Post(
        title="Who's down to come to Dave and Buster's with me tonight???",
        body="It's Wednesday, you know what that means!!! Half-price games at David and Bartholomew's tonight! Plus happy hour to boot!! Who's up for some drinks and games??",
        user_id=1,
        preview_img_id=11
    )



    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.commit()

def undo_posts():
    db.session.execute("DELETE FROM posts")
    db.session.commit()
