from app.models import db, Post, environment
import datetime

def seed_posts():
    post1 = Post(
        title='Baking during Christmas is my favorite way to spend the holiday!',
        body='I made these absolutely amazing Christmas cookies last night, we just could NOT stop eating them! I must have had at least 6 cookies...I kind of feel bad but at the same time who cares! This is what the holidays are for!',
        user_id=3,
        preview_img_id=1,
        created_at=datetime.datetime(2022, 12, 20, hour=8, minute=22, second=49)
    )

    post2 = Post(
        title='I finally went to see Black Panther 2, it was pretty good!',
        body='I had kinda hoped it would be better, but all of Phase 4 has been fairly lackluster so I guess that is not too surprising. Looking forward to Phase 5!!',
        user_id=2,
        preview_img_id=2,
        created_at=datetime.datetime(2022, 12, 20, hour=12, minute=25, second=39)
    )

    post3 = Post(
        title='The craziest thing happened to me today! Ice cream dreams!!',
        body='You guys will never believe what happened today. I was walking down the street and an ice cream truck stopped to give me free ice cream! #blessed',
        user_id=11,
        preview_img_id=3,
        created_at=datetime.datetime(2022, 12, 19, hour=14, minute=59, second=33)
    )

    post4 = Post(
        title="It's time to post another cat pic!",
        body='I hope you guys are enjoying all the photos I have been posting! Here is another one of me with my cat.',
        user_id=4,
        preview_img_id=4,
        created_at=datetime.datetime(2022, 12, 14, hour=20, minute=31, second=32)
    )

    post5 = Post(
        title='How many chucks would a woodchuck chuck...',
        body='This is the greatest mystery of our time, no one knows the answer! I have a hypothesis, leave a comment and I might share it with you!',
        user_id=5,
        preview_img_id=5,
        created_at=datetime.datetime(2022, 12, 15, hour=10, minute=29, second=53)
    )

    post6 = Post(
        title="At Porto's bakery in downtown LA!",
        body='Oh my gosh this is my absolute favorite spot around here. Just can not get enough!!!',
        user_id=6,
        preview_img_id=6,
        created_at=datetime.datetime(2022, 12, 18, hour=5, minute=1, second=58)
    )

    post7 = Post(
        title="Been hittin' the gym hard this month!",
        body="Most people are slacking off and getting fat, but not me! I'm toning up and ready to take on the new year!",
        user_id=7,
        preview_img_id=7,
        created_at=datetime.datetime(2022, 12, 21, hour=11, minute=35, second=40)
    )

    post8 = Post(
        title='Finally have some free time, what game should I play??',
        body="Who's been gaming a bunch recently? Can't decide what I should play, leave a comment and let me know if you have any good ideas for me!",
        user_id=8,
        preview_img_id=8,
        created_at=datetime.datetime(2022, 12, 20, hour=1, minute=11, second=29)
    )

    post9 = Post(
        title='I sure am getting tired of making seeds!',
        body='This is only the ninth seed on this website but man do I already feel exhausted! I need someone to automate my seed generation process...',
        user_id=9,
        preview_img_id=9,
        created_at=datetime.datetime(2022, 12, 19, hour=15, minute=17, second=10)
    )

    post10 = Post(
        title='Had such an awesome trip to Magic Mountain last weekend!',
        body="It's been a long time since my last trip to Six Flags, but holy crap it was a blast! I went on every single rollercoaster because the lines were pretty short. I think my favorite is still Scream, but the new Wonder Woman coaster is amazing too!",
        user_id=10,
        preview_img_id=10,
        created_at=datetime.datetime(2022, 12, 22, hour=19, minute=48, second=6)
    )

    post11 = Post(
        title="Who's down to come to Dave and Buster's with me tonight???",
        body="It's Wednesday, you know what that means!!! Half-price games at David and Bartholomew's tonight! Plus happy hour to boot!! Who's up for some drinks and games??",
        user_id=19,
        preview_img_id=11,
        created_at=datetime.datetime(2022, 12, 21, hour=16, minute=36, second=2)
    )

    post12 = Post(
        title="Holy crap, check out this Uncrate clone these guys made!",
        body="Dude this thing is so accurate!! I can't even tell if I'm on the real site or not! Yes I'm shamelessly plugging my other project on this project, wanna fight about it?",
        user_id=12,
        preview_img_id=12,
        created_at=datetime.datetime(2022, 12, 17, hour=22, minute=1, second=50)
    )

    post13 = Post(
        title="Just got done watching Dark. Why isn't this show talked about more??",
        body="This is easily the best take on time-travel I've ever seen. Absolutely freakin' mindblowing!!! If you're AT ALL interested in science-fiction you absolutely MUST check it out!!",
        user_id=13,
        preview_img_id=13,
        created_at=datetime.datetime(2022, 12, 16, hour=6, minute=33, second=34)
    )

    post14 = Post(
        title="The Lost Metal was a fantastic ending to Mistborn Era 2!!",
        body="The Cosmere is finally all coming together! So many thousands of pages paying off. Wayne is one of the funniest characters in modern fantasy!! Now the wait for Stormlight 5 begins...",
        user_id=14,
        preview_img_id=14,
        created_at=datetime.datetime(2022, 12, 23, hour=23, minute=3, second=9)
    )

    post15 = Post(
        title="Is this even a hot take? Saitama is the strongest character in all of fictional canon.",
        body="Forget the classic Goku vs. Superman debate. Saitama can literally one-punch any character ever made. It's not even fair!! Man season 3 sure is taking forever though.",
        user_id=15,
        preview_img_id=15,
        created_at=datetime.datetime(2022, 12, 20, hour=7, minute=44, second=53)
    )

    post16 = Post(
        title="Oh man I made such a bomb homemade philly cheesesteak last night!!",
        body="This thing slapped!!!! Who needs Philadelphia? I can post the recipe if anyone wants to see it. Just absolutely incredible!",
        user_id=16,
        preview_img_id=16,
        created_at=datetime.datetime(2022, 12, 19, hour=9, minute=28, second=42)
    )

    post17 = Post(
        title="Does anyone else randomly think about the ending of Game of Thrones and get sad?",
        body="I can't believe it still haunts me years after the fact. How could they take one of the greatest shows of all time and just throw it into the trashcan? House of the Dragon was a pretty solid first season, but man I can't believe they botched GoT so bad.",
        user_id=33,
        preview_img_id=17,
        created_at=datetime.datetime(2022, 12, 18, hour=3, minute=4, second=39)
    )

    post18 = Post(
        title="My in-laws just got a new pup--say hello to Rocky!!",
        body="He's like a Disney character! What an adorable freakin' face that is!!! He's secretly a little monster but he can get away with it...",
        user_id=18,
        preview_img_id=18,
        created_at=datetime.datetime(2022, 12, 13, hour=13, minute=52, second=47)
    )

    post19 = Post(
        title="Who's up for some Mario Kart??",
        body="Feel like breaking out a classic during the holiday break, anyone wanna join me for a couple hours of good ol' fashioned online Mario Kart 8?",
        user_id=19,
        preview_img_id=19,
        created_at=datetime.datetime(2022, 12, 20, hour=14, minute=14, second=1)
    )

    post20 = Post(
        title="Guys is it just me or is McDonald's just absolutely 🔥 sometimes",
        body="Usually it's total trash, but man when it hits it really slaps hard! If only they could delivery a reliably good product I'd be here all the time...",
        user_id=20,
        preview_img_id=20,
        created_at=datetime.datetime(2022, 12, 22, hour=19, minute=55, second=12)
    )

    post21 = Post(
        title="Petition to stop eating turkey for Thanksgiving and move on to the far superior ham",
        body="Let's face it, turkey sucks. Why do we force ourselves to eat it every year? Ham is way better. Prime rib, too. Pretty much anything is better than dry-ass turkey.",
        user_id=21,
        preview_img_id=21,
        created_at=datetime.datetime(2022, 12, 19, hour=8, minute=43, second=28)
    )

    post22 = Post(
        title="Who would win in a boxing match, the tooth fairy or the easter bunny?",
        body="First to get knocked-out loses! I'm putting my money on the tooth fairy, I think the easter bunny ain't got hands at all",
        user_id=22,
        preview_img_id=22,
        created_at=datetime.datetime(2022, 12, 18, hour=22, minute=39, second=44)
    )

    post23 = Post(
        title="Bruh Uber has a helicopter option now??",
        body="Is this for real??? OK BRB helicoptering to Denny's ROFL",
        user_id=23,
        preview_img_id=23,
        created_at=datetime.datetime(2022, 12, 20, hour=2, minute=3, second=4)
    )

    post24 = Post(
        title="Are smart watches worth it? I don't really see the appeal tbh, someone weigh in!",
        body="They seem too small to be of any practical use. Who here has a smart watch and actually feels like they've gotten their money's worth from it? Let me know!!",
        user_id=24,
        preview_img_id=24,
        created_at=datetime.datetime(2022, 12, 20, hour=12, minute=9, second=13)
    )

    post25 = Post(
        title="Puppy photobomb!!!",
        body="Every Christmas Zoe perfectly photobombs at least one picture! This year was no exception 😂",
        user_id=25,
        preview_img_id=25,
        created_at=datetime.datetime(2022, 12, 25, hour=7, minute=59, second=2)
    )

    post26 = Post(
        title="Hot take: the first two Harry Potter movies are the best Christmas movies",
        body="I know most people don't even consider them Christmas movies at all, but they totally are. Nothing makes me feel the whimsical spirit of Christmas quite like those first two HPs!",
        user_id=26,
        preview_img_id=26,
        created_at=datetime.datetime(2022, 12, 24, hour=21, minute=43, second=32)
    )

    post27 = Post(
        title="Broooo sounds like the DCU is getting rebooted once again...",
        body="I was so stoked to have Henry Cavill back as Superman for Man of Steel 2, but latest news is he's out in favor of a young Superman reboot. Will this cinematic universe ever get its act together??",
        user_id=27,
        preview_img_id=27,
        created_at=datetime.datetime(2022, 12, 20, hour=16, minute=26, second=43)
    )

    post28 = Post(
        title="Found this girl this morning at 6am in freezing weather",
        body="I guess she's mine now? I wasn't looking for a cat but she doesn't seem like she plans on going anywhere...",
        user_id=28,
        preview_img_id=28,
        created_at=datetime.datetime(2022, 12, 19, hour=6, minute=7, second=8)
    )

    post29 = Post(
        title="What better way to use gingerbread than to construct an X-Wing?",
        body="OK I'm sorry I blatantly stole this from Reddit. But it's so cool!!!! What's the best gingerbread structure you've ever made??",
        user_id=29,
        preview_img_id=29,
        created_at=datetime.datetime(2022, 12, 16, hour=18, minute=38, second=58)
    )

    post30 = Post(
        title="My dog LOVES looking at the Christmas lights every year!!",
        body="He's so cute I absolutely can't stand it. Love taking him out to enjoy the holidays 🐶",
        user_id=30,
        preview_img_id=30,
        created_at=datetime.datetime(2022, 12, 19, hour=11, minute=23, second=47)
    )

    post31 = Post(
        title="ohmygod coffee is saving my life right now",
        body="I don't know what I'd do without coffee. It's truly the greatest drink to ever exist (that doesn't have alcohol in it)",
        user_id=31,
        preview_img_id=31,
        created_at=datetime.datetime(2022, 12, 22, hour=7, minute=56, second=57)
    )

    post32 = Post(
        title="i'm saying it: costco is a lawless frontier where anything goes",
        body="have you guys been in one lately? there's no labels on anything, the store magically shifts where they put stuff, there are no orderly lines for anything...it's a madhouse!",
        user_id=32,
        preview_img_id=32,
        created_at=datetime.datetime(2022, 12, 20, hour=11, minute=35, second=29)
    )

    post33 = Post(
        title="Who has a book recommendation for me?",
        body="I love Discworld and I'm looking for something kind of in that vein. Something with whimsy and humor would be great!",
        user_id=1,
        preview_img_id=33,
        created_at=datetime.datetime(2022, 12, 24, hour=13, minute=51, second=6)
    )

    post34 = Post(
        title="Today I got breakfast in bed!!!",
        body="It's the simple luxuries in life that make it all worth it. Haven't done this in forever!!",
        user_id=34,
        preview_img_id=34,
        created_at=datetime.datetime(2022, 12, 24, hour=9, minute=1, second=1)
    )

    post35 = Post(
        title="Building a computer--I'd be insane to get anything other than a solid state drive, right?",
        body="I don't know why I'm even asking, but just in case someone knows something I don't I guess. SSD are the wave of the future, isn't that right?",
        user_id=3,
        preview_img_id=35,
        created_at=datetime.datetime(2022, 12, 13, hour=15, minute=27, second=2)
    )

    post36 = Post(
        title="Finally went to Disneyland after 20 years away! It's amazing how much has changed...",
        body="...and yet how little! Nostalgia has never hit me so hard. I'm so glad I found the time to go back and I can't wait to come again!",
        user_id=4,
        preview_img_id=36,
        created_at=datetime.datetime(2022, 12, 19, hour=17, minute=22, second=42)
    )

    post37 = Post(
        title="Guardians of the Galaxy is the best MCU movie and possibly the best sci-fi movie ever made",
        body="I don't even care how many people I just made angry. That movie is just bonkers good and I feel like it deserves more credit than it gets.",
        user_id=5,
        preview_img_id=37,
        created_at=datetime.datetime(2022, 12, 22, hour=22, minute=33, second=58)
    )

    post38 = Post(
        title="Anyone have a recommendation for a good pair of headphones?",
        body="I always by crappy cheap ones and they break within a couple months. Ready to spend some cash on a quality pair, who can point me in the right direction?",
        user_id=17,
        preview_img_id=38,
        created_at=datetime.datetime(2022, 12, 23, hour=12, minute=25, second=49)
    )

    posts = [
        post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11,
        post12, post13, post14, post15, post16, post17, post18, post19, post20, post21, post22,
        post23, post24, post25, post26, post27, post28, post29, post30, post31, post32, post33,
        post34, post35, post36, post37, post38
    ]

    [db.session.add(post) for post in posts]
    db.session.commit()

def undo_posts():
    if environment == "production":
            db.session.execute(f"TRUNCATE table posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")
        db.session.commit()
