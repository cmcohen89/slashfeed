from app.models import db, Post, environment
import datetime

def seed_posts():
    post1 = Post(
        title='Baking during Christmas is my favorite way to spend the holiday!',
        body='I made these absolutely amazing Christmas cookies last night, we just could NOT stop eating them! I must have had at least 6 cookies...I kind of feel bad but at the same time who cares! This is what the holidays are for!',
        user_id=3,
        preview_img_id=1,
        created_at=datetime.datetime(2022, 12, 20)
    )

    post2 = Post(
        title='I finally went to see Black Panther 2, it was pretty good!',
        body='I had kinda hoped it would be better, but all of Phase 4 has been fairly lackluster so I guess that is not too surprising. Looking forward to Phase 5!!',
        user_id=2,
        preview_img_id=2
    )

    post3 = Post(
        title='The craziest thing happened to me today! Ice cream dreams!!',
        body='You guys will never believe what happened today. I was walking down the street and an ice cream truck stopped to give me free ice cream! #blessed',
        user_id=11,
        preview_img_id=3
    )

    post4 = Post(
        title="It's time to post another cat pic!",
        body='I hope you guys are enjoying all the photos I have been posting! Here is another one of me with my cat.',
        user_id=4,
        preview_img_id=4,
        created_at=datetime.datetime(2022, 12, 21)
    )

    post5 = Post(
        title='How many chucks would a woodchuck chuck...',
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
        user_id=10,
        preview_img_id=10
    )

    post11 = Post(
        title="Who's down to come to Dave and Buster's with me tonight???",
        body="It's Wednesday, you know what that means!!! Half-price games at David and Bartholomew's tonight! Plus happy hour to boot!! Who's up for some drinks and games??",
        user_id=19,
        preview_img_id=11
    )

    post12 = Post(
        title="Holy crap, check out this Uncrate clone these guys made!",
        body="Dude this thing is so accurate!! I can't even tell if I'm on the real site or not! Yes I'm shamelessly plugging my other project on this project, wanna fight about it?",
        user_id=12,
        preview_img_id=12
    )

    post13 = Post(
        title="Just got done watching Dark. Why isn't this show talked about more??",
        body="This is easily the best take on time-travel I've ever seen. Absolutely freakin' mindblowing!!! If you're AT ALL interested in science-fiction you absolutely MUST check it out!!",
        user_id=13,
        preview_img_id=13
    )

    post14 = Post(
        title="The Lost Metal was a fantastic ending to Mistborn Era 2!!",
        body="The Cosmere is finally all coming together! So many thousands of pages paying off. Wayne is one of the funniest characters in modern fantasy!! Now the wait for Stormlight 5 begins...",
        user_id=14,
        preview_img_id=14
    )

    post15 = Post(
        title="Is this even a hot take? Saitama is the strongest character in all of fictional canon.",
        body="Forget the classic Goku vs. Superman debate. Saitama can literally one-punch any character ever made. It's not even fair!! Man season 3 sure is taking forever though.",
        user_id=15,
        preview_img_id=15
    )

    post16 = Post(
        title="Oh man I made such a bomb homemade philly cheesesteak last night!!",
        body="This thing slapped!!!! Who needs Philadelphia? I can post the recipe if anyone wants to see it. Just absolutely incredible!",
        user_id=16,
        preview_img_id=16
    )

    post17 = Post(
        title="Does anyone else randomly think about the ending of Game of Thrones and get sad?",
        body="I can't believe it still haunts me years after the fact. How could they take one of the greatest shows of all time and just throw it into the trashcan? House of the Dragon was a pretty solid first season, but man I can't believe they botched GoT so bad.",
        user_id=17,
        preview_img_id=17
    )

    post18 = Post(
        title="My in-laws just got a new pup--say hello to Rocky!!",
        body="He's like a Disney character! What an adorable freakin' face that is!!! He's secretly a little monster but he can get away with it...",
        user_id=18,
        preview_img_id=18
    )

    post19 = Post(
        title="Who's up for some Mario Kart??",
        body="Feel like breaking out a classic during the holiday break, anyone wanna join me for a couple hours of good ol' fashioned online Mario Kart 8?",
        user_id=19,
        preview_img_id=19
    )

    post20 = Post(
        title="Guys is it just me or is McDonald's just absolutely 🔥 sometimes",
        body="Usually it's total trash, but man when it hits it really slaps hard! If only they could delivery a reliably good product I'd be here all the time...",
        user_id=20,
        preview_img_id=20
    )

    post21 = Post(
        title="Petition to stop eating turkey for Thanksgiving and move on to the far superior ham",
        body="Let's face it, turkey sucks. Why do we force ourselves to eat it every year? Ham is way better. Prime rib, too. Pretty much anything is better than dry-ass turkey.",
        user_id=21,
        preview_img_id=21
    )

    post22 = Post(
        title="Who would win in a boxing match, the tooth fairy or the easter bunny?",
        body="First to get knocked-out loses! I'm putting my money on the tooth fairy, I think the easter bunny ain't got hands at all",
        user_id=22,
        preview_img_id=22
    )

    post23 = Post(
        title="Bruh Uber has a helicopter option now??",
        body="Is this for real??? OK BRB helicoptering to Denny's ROFL",
        user_id=23,
        preview_img_id=23
    )

    post24 = Post(
        title="Are smart watches worth it? I don't really see the appeal tbh, someone weigh in!",
        body="They seem too small to be of any practical use. Who here has a smart watch and actually feels like they've gotten their money's worth from it? Let me know!!",
        user_id=24,
        preview_img_id=24
    )

    post25 = Post(
        title="Puppy photobomb!!!",
        body="Every Christmas Zoe perfectly photobombs at least one picture! This year was no exception 😂",
        user_id=25,
        preview_img_id=25
    )

    post26 = Post(
        title="Hot take: the first two Harry Potter movies are the best Christmas movies",
        body="I know most people don't even consider them Christmas movies at all, but they totally are. Nothing makes me feel the whimsical spirit of Christmas quite like those first two HPs!",
        user_id=26,
        preview_img_id=26
    )

    post27 = Post(
        title="Broooo sounds like the DCU is getting rebooted once again...",
        body="I was so stoked to have Henry Cavill back as Superman for Man of Steel 2, but latest news is he's out in favor of a young Superman reboot. Will this cinematic universe ever get its act together??",
        user_id=27,
        preview_img_id=27
    )

    post28 = Post(
        title="Found this girl this morning at 6am in freezing weather",
        body="I guess she's mine now? I wasn't looking for a cat but she doesn't seem like she plans on going anywhere...",
        user_id=28,
        preview_img_id=28
    )

    post29 = Post(
        title="What better way to use gingerbread than to construct an X-Wing?",
        body="OK I'm sorry I blatantly stole this from Reddit. But it's so cool!!!! What's the best gingerbread structure you've ever made??",
        user_id=29,
        preview_img_id=29
    )

    post30 = Post(
        title="My dog LOVES looking at the Christmas lights every year!!",
        body="He's so cute I absolutely can't stand it. Love taking him out to enjoy the holidays 🐶",
        user_id=30,
        preview_img_id=30
    )

    post31 = Post(
        title="ohmygod coffee is saving my life right now",
        body="I don't know what I'd do without coffee. It's truly the greatest drink to ever exist (that doesn't have alcohol in it)",
        user_id=31,
        preview_img_id=31
    )

    post32 = Post(
        title="i'm saying it: costco is a lawless frontier where anything goes",
        body="have you guys been in one lately? there's no labels on anything, the store magically shifts where they put stuff, there are no orderly lines for anything...it's a madhouse!",
        user_id=32,
        preview_img_id=32
    )

    post33 = Post(
        title="Who has a book recommendation for me?",
        body="I love Discworld and I'm looking for something kind of in that vein. Something with whimsy and humor would be great!",
        user_id=1,
        preview_img_id=33
    )

    post34 = Post(
        title="Today I got breakfast in bed!!!",
        body="It's the simple luxuries in life that make it all worth it. Haven't done this in forever!!",
        user_id=2,
        preview_img_id=34
    )

    post35 = Post(
        title="Building a computer--I'd be insane to get anything other than a solid state drive, right?",
        body="I don't know why I'm even asking, but just in case someone knows something I don't I guess. SSD are the wave of the future, isn't that right?",
        user_id=3,
        preview_img_id=35
    )

    post36 = Post(
        title="Finally went to Disneyland after 20 years away! It's amazing how much has changed...",
        body="...and yet how little! Nostalgia has never hit me so hard. I'm so glad I found the time to go back and I can't wait to come again!",
        user_id=4,
        preview_img_id=36
    )

    post37 = Post(
        title="Guardians of the Galaxy is the best MCU movie and possibly the best sci-fi movie ever made",
        body="I don't even care how many people I just made angry. That movie is just bonkers good and I feel like it deserves more credit than it gets.",
        user_id=5,
        preview_img_id=37
    )

    post38 = Post(
        title="Anyone have a recommendation for a good pair of headphones?",
        body="I always by crappy cheap ones and they break within a couple months. Ready to spend some cash on a quality pair, who can point me in the right direction?",
        user_id=6,
        preview_img_id=38
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
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)
    db.session.add(post22)
    db.session.add(post23)
    db.session.add(post24)
    db.session.add(post25)
    db.session.add(post26)
    db.session.add(post27)
    db.session.add(post28)
    db.session.add(post29)
    db.session.add(post30)
    db.session.add(post31)
    db.session.add(post32)
    db.session.add(post33)
    db.session.add(post34)
    db.session.add(post35)
    db.session.add(post36)
    db.session.add(post37)
    db.session.add(post38)
    db.session.commit()

def undo_posts():
    if environment == "production":
            db.session.execute(f"TRUNCATE table posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")
        db.session.commit()
