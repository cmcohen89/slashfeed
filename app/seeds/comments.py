from app.models import db, Comment, environment

all_comments = [
    {
        "body": 'No way! So lucky!!! Never once in my life have I gotten free ice cream, this is a load of malarkey!',
        "user_id": 2,
        "post_id": 3
    },
    {
        "body": "free ice cream tastes better than normal ice cream!!! it's science!!",
        "user_id": 3,
        "post_id": 3
    },
    {
        "body": "bro now I have the ice cream truck song stuck in my head... 🎼",
        "user_id": 4,
        "post_id": 3
    },
    {
        "body": "Glad you finally saw it! Yeah it didn't live up to the first one, but that set kind of an impossible standard haha",
        "user_id": 5,
        "post_id": 2
    },
    {
        "body": "Wakanda forever!!!!",
        "user_id": 6,
        "post_id": 2
    },
    {
        "body": "agreed, it was kind of trash tbh. the only good thing to come out of phase 4 has been Loki imo",
        "user_id": 7,
        "post_id": 2
    },
    {
        "body": 'omg those look so good!!! brb omw to your house LOL',
        "user_id": 8,
        "post_id": 1
    },
    {
        "body": "wooowwww who knew you were such a master baker?? if I didn't know better I'd say this was a stock image...",
        "user_id": 9,
        "post_id": 1
    },
    {
        "body": 'hahaha the gingerbread man looks like the one from Shrek!!! NOT MY GUMDROP BUTTONS!',
        "user_id": 10,
        "post_id": 1
    },
    {
        "body": "awww kitteh!!! 😻 what's his/her name?",
        "user_id": 11,
        "post_id": 4
    },
    {
        "body": "that is a nice lookin' kitty right there",
        "user_id": 12,
        "post_id": 4
    },
    {
        "body": "bruhhh this picture is so cute, i'm dying 😍",
        "user_id": 13,
        "post_id": 4
    },
    {
        "body": "it's extremely obvious that the answer is 42",
        "user_id": 14,
        "post_id": 5
    },
    {
        "body": "tell me ur hypothesis!!!!",
        "user_id": 15,
        "post_id": 5
    },
    {
        "body": "is that an actual woodchuck?? TIL what a woodchuck looks like 🧠",
        "user_id": 16,
        "post_id": 5
    },
    {
        "body": "dude Porto's is so 🔥! i'm on a quest to try everything on their menu",
        "user_id": 17,
        "post_id": 6
    },
    {
        "body": "OMG PORTO'S YASSSSSSSSSSSS",
        "user_id": 18,
        "post_id": 6
    },
    {
        "body": "little-known secret, their cubano might be the best thing there...!",
        "user_id": 3,
        "post_id": 6
    },
    {
        "body": "douchey gym pic ✅",
        "user_id": 5,
        "post_id": 7
    },
    {
        "body": "lookin' swole bro! and damn that's a sick tat. who's the artist you used???",
        "user_id": 8,
        "post_id": 7
    },
    {
        "body": "bro is this a pic from Equinox?? you flexin' in more ways than one",
        "user_id": 9,
        "post_id": 7
    },
    {
        "body": "God of War: Ragnarok!!! That game is so freakin' good, thank me later!",
        "user_id": 7,
        "post_id": 8
    },
    {
        "body": "ohhhhh you finally got a PS5?? that's amazing...definitely check out Returnal ASAP",
        "user_id": 11,
        "post_id": 8
    },
    {
        "body": "step 1: throw your PS5 in the trash and get a PC you peasant",
        "user_id": 13,
        "post_id": 8
    },
    {
        "body": "tell me about it!! making seeds for my projects is so time-consuming!",
        "user_id": 15,
        "post_id": 9
    },
    {
        "body": "what's really weird is that i'm writing this comment seed on a seeded post about making seeds 😵",
        "user_id": 17,
        "post_id": 9
    },
    {
        "body": "this has gotten uncomfortably meta",
        "user_id": 2,
        "post_id": 9
    },
    {
        "body": "dude I love going to Magic Mountain!! but wait, how'd you take this pic??",
        "user_id": 4,
        "post_id": 10
    },
    {
        "body": "i have to agree with the above commenter, it seems kind of impossible for you to have taken this pic",
        "user_id": 6,
        "post_id": 10
    },
    {
        "body": "gonna third this sentiment, this is almost certainly a stock photo. i'm reporting you to the stock photo police.",
        "user_id": 8,
        "post_id": 10
    },
    {
        "body": "oh heck yes, you know i'm always down to clown at D&B town 🤩",
        "user_id": 10,
        "post_id": 11
    },
    {
        "body": "dude their happy hour is wild. half-price on basically everything! also, their food is surprisingly pretty solid",
        "user_id": 12,
        "post_id": 11
    },
    {
        "body": "I've never been to a Dave and Buster's! Is it worth it? How expensive is it?",
        "user_id": 14,
        "post_id": 11
    },
    {
        "body": "Whoa that's crazy spot-on! It's totally worth going to visit it at https://reduncrate.herokuapp.com",
        "user_id": 15,
        "post_id": 12
    },
    {
        "body": "This shameless self-promotion isn't fooling anyone, knock it off",
        "user_id": 16,
        "post_id": 12
    },
    {
        "body": "Yeah, especially because if someone is looking at slashfeed then you probably already sent them to Reduncrate anyway...",
        "user_id": 17,
        "post_id": 12
    },
    {
        "body": "Ich bin Noah.",
        "user_id": 18,
        "post_id": 13
    },
    {
        "body": "DUDE GREATEST SHOW OF ALL TIME. Everybody's sleepin' on this, we gotta get the word out somehow!",
        "user_id": 1,
        "post_id": 13
    },
    {
        "body": "Was wir wissen ist ein Tropfen, was wir nicht wissen, ist ein Ozean",
        "user_id": 6,
        "post_id": 13
    },
    {
        "body": "Wayne had me laughing out loud so often!! Sanderson really outdid himself with the comedy in this one.",
        "user_id": 2,
        "post_id": 14
    },
    {
        "body": "AHHHHH I can't believe the books are finally crossing over! The Cosmere is truly a one-of-a-kind experience!",
        "user_id": 7,
        "post_id": 14
    },
    {
        "body": "How long until Mistborn Era 3???",
        "user_id": 11,
        "post_id": 14
    },
    {
        "body": "Coldest take of all time. But you're not even right, the strongest character in all of fictional canon is Rhett Con from Rick and Morty!",
        "user_id": 3,
        "post_id": 15
    },
    {
        "body": "Ooooooooh that's true!!! Rhett Con would absolutely destroy Saitama, ezpz",
        "user_id": 5,
        "post_id": 15
    },
    {
        "body": "What in the hell are you people going on about? Who is Saitama and Rhett Con?",
        "user_id": 12,
        "post_id": 15
    },
    {
        "body": "HO. LEE. SHNIKIES. That looks so freaking amazing, next time I come over you're making that for us!!",
        "user_id": 4,
        "post_id": 16
    },
    {
        "body": "Bro what. How did you even do this",
        "user_id": 9,
        "post_id": 16
    },
    {
        "body": "omfgggggggggggg i haven't had a good philly cheesesteak in yearsssssssssss",
        "user_id": 17,
        "post_id": 16
    },
    {
        "body": "such a freakin' tragedy. maybe House of the Dragon and Snow can redeem that ending somehow...",
        "user_id": 5,
        "post_id": 17
    },
    {
        "body": "yeah right, keep dreamin'! there's no way to fix that abomination of a final season.",
        "user_id": 18,
        "post_id": 17
    },
    {
        "body": "guys it's been like 3 years. time to move on.",
        "user_id": 12,
        "post_id": 17
    },
    {
        "body": "OMG I just want to eat it!! 🐶",
        "user_id": 6,
        "post_id": 18
    },
    {
        "body": "IS THIS EVEN REAL IT LOOKS LIKE A STUFFED ANIMAL AHHHHHHH",
        "user_id": 10,
        "post_id": 18
    },
    {
        "body": "please send me your in-laws' address posthaste that I might steal Rocky for mine own self",
        "user_id": 11,
        "post_id": 18
    },
]


def seed_comments():
    comments = [
        Comment(
            body=comment["body"],
            user_id=comment["user_id"],
            post_id=comment["post_id"]
        )
        for comment in all_comments
    ]

    [db.session.add(comment) for comment in comments]
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")
        db.session.commit()
