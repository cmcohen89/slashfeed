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
    {
        "body": "oh dude it's so on, just name the time and the place and I'll whoop your butt just like back in high school!!",
        "user_id": 5,
        "post_id": 19
    },
    {
        "body": "did you see they've been releasing DLC for this game?? it came out like 8 years ago, that's so wild!",
        "user_id": 10,
        "post_id": 19
    },
    {
        "body": "I'll play but I call dibs on Bowser. Or Dry Bowser. Also if you don't have the Hyrule bike it's a dealbreaker for me",
        "user_id": 15,
        "post_id": 19
    },
    {
        "body": "ugh how can you eat that crap, it's so disgusting!!",
        "user_id": 6,
        "post_id": 20
    },
    {
        "body": "smh ignore the above commenter, McD's is where it's atttttttt",
        "user_id": 8,
        "post_id": 20
    },
    {
        "body": "y'all are both trippin', the only place with a drive-thru that's worth going to is a little gem called In'n'Out, don't @ me",
        "user_id": 11,
        "post_id": 20
    },
    {
        "body": "this is so genius. why have I felt shackled by the chains of turkey my entire life? we can choose to eat whatever we want on Thanksgiving!!!",
        "user_id": 19,
        "post_id": 21
    },
    {
        "body": "whoa whoa whoa, there are traditions in place for a reason. next you're gonna tell me to stop leaving milk and cookies out for santa! 🎅",
        "user_id": 22,
        "post_id": 21
    },
    {
        "body": "is this legal? i don't think this is legal",
        "user_id": 28,
        "post_id": 21
    },
    {
        "body": "It isn't even a competition. The Easter Bunny is just some dumb rabbit, big whoop. The Tooth Fairy is a mystical otherworldly being with incredible powers that defy explanation. Next you're gonna ask who would win, Thor or Batman...",
        "user_id": 29,
        "post_id": 22
    },
    {
        "body": "pffffftt this person talkin' about the Easter Bunny like they just some rodent, y'all are trippin' if you think EB ain't got hands",
        "user_id": 17,
        "post_id": 22
    },
    {
        "body": "why are any of you talking about this. this is the stupidest conversation i've ever had the misfortune of reading, and now being apart of.",
        "user_id": 30,
        "post_id": 22
    },
    {
        "body": "OMG NO WAY that's gotta be fake",
        "user_id": 3,
        "post_id": 23
    },
    {
        "body": "damn that's a reasonable price too. looks like i'mma start helicoptoring everywhere LOL",
        "user_id": 7,
        "post_id": 23
    },
    {
        "body": "dude I saw this on Reddit! is there any chance that's real???",
        "user_id": 13,
        "post_id": 23
    },
    {
        "body": "I use mine all the time! It's way more convenient than pulling out your phone for every little thing, plus it keeps track of your steps and your health metrics and a buncha other stuff too!",
        "user_id": 20,
        "post_id": 24
    },
    {
        "body": "nah it's a racket. don't be a 🐑",
        "user_id": 14,
        "post_id": 24
    },
    {
        "body": "honestly I really like mine. don't knock it 'til you try it!!",
        "user_id": 26,
        "post_id": 24
    },
    {
        "body": "ahhhhhhhhh look at that puppy face!!! SO CUTEEEEEEEEEEEE",
        "user_id": 8,
        "post_id": 25
    },
    {
        "body": "hahaha I remember last year's picture! this one is even better I think!!",
        "user_id": 15,
        "post_id": 25
    },
    {
        "body": "that is the cutest doggo I have ever seen, pls return whatever Christmas gift you got me and send me Zoe instead!",
        "user_id": 16,
        "post_id": 25
    },
    {
        "body": "bro fr tho. chris colombus knows how to bring that holiday magic like none other",
        "user_id": 27,
        "post_id": 26
    },
    {
        "body": "what??? harry potter isn't a christmas movie, wat are you even talkin about right now. go watch die hard like a true christmas lover",
        "user_id": 4,
        "post_id": 26
    },
    {
        "body": "it's so weird because i totally know exactly what you mean. why are those first two movies so full of holiday spirit even though they cover an entire school year??",
        "user_id": 9,
        "post_id": 26
    },
    {
        "body": "why god why. i knew the DCU was gonna be a disaster right when they announced that there would be a Justice League movie before giving so many of the roster their own solo movie. Marvel really did it right, you have to build things up properly...",
        "user_id": 21,
        "post_id": 27
    },
    {
        "body": "RIP Cavill. Say what you will about him but he truly loved the role and brought his all to it. First The Witcher, now this......",
        "user_id": 23,
        "post_id": 27
    },
    {
        "body": "Man of Steel was trash, this is a blessing imo. Here's to hoping Gunn can figure something out moving forward",
        "user_id": 16,
        "post_id": 27
    },
    {
        "body": "yesssssssss she has adopted you and now you keeps. what are you gonna name her??",
        "user_id": 19,
        "post_id": 28
    },
    {
        "body": "hmmmm I think I'll name her Icicle 😹",
        "user_id": 28,
        "post_id": 28
    },
    {
        "body": "awww a little Icy kitty! I love that 😻",
        "user_id": 19,
        "post_id": 28
    },
    {
        "body": "DUDE that's killer!! Maybe making gingerbread stuff is cooler than I thought...",
        "user_id": 31,
        "post_id": 29
    },
    {
        "body": "May the Force be with you...",
        "user_id": 9,
        "post_id": 29
    },
    {
        "body": "...and also with you",
        "user_id": 11,
        "post_id": 29
    },
    {
        "body": "OH. MY. GOD. That face!!!!!!!!",
        "user_id": 20,
        "post_id": 30
    },
    {
        "body": "This is the most precious thing I have ever seen in all of my life",
        "user_id": 18,
        "post_id": 30
    },
    {
        "body": "holy moly what a christmas angel!!! give him a big fat kiss for me 💋",
        "user_id": 25,
        "post_id": 30
    },
    {
        "body": "caffeine > all other drugs",
        "user_id": 27,
        "post_id": 31
    },
    {
        "body": "but the real question: hot coffee or iced coffee? which is superior?",
        "user_id": 22,
        "post_id": 31
    },
    {
        "body": "MFs out here tryna start fights in a social media thread smh",
        "user_id": 21,
        "post_id": 31
    },
    {
        "body": "it is both a horrible and magical place. honestly, it's worth it for the food court alone...",
        "user_id": 7,
        "post_id": 32
    },
    {
        "body": "right!!! it's wild that none of the aisles are labeled! how tf are you supposed to know where anything is???",
        "user_id": 14,
        "post_id": 32
    },
    {
        "body": "do not question the majesty of costco. just be grateful that it exists and eat your $2 slice of pizza that is bigger than a child's torso",
        "user_id": 21,
        "post_id": 32
    },
    {
        "body": "So it's sci-fi and not fantasy, but if you love Pratchett you'll love Hitchhiker's Guide. Adams has a very very similar whimsical narrative voice, I think it'd be right up your alley.",
        "user_id": 10,
        "post_id": 33
    },
    {
        "body": "Hmmm I only got a few books into Discworld. There are so many, which are your favorites?",
        "user_id": 22,
        "post_id": 33
    },
    {
        "body": "I didn't even read what you wrote but just start on the Cosmere. It's time to join the Sanderson fanderson.",
        "user_id": 29,
        "post_id": 33
    },
    {
        "body": "lucky!!!! i can't even remember the last time someone cooked me breakfast, let alone served it to me in bed!",
        "user_id": 5,
        "post_id": 34
    },
    {
        "body": "what??? what prompted this??",
        "user_id": 8,
        "post_id": 34
    },
    {
        "body": "nah y'all are trippin', I made it for myself. self-love!!!",
        "user_id": 2,
        "post_id": 34
    },
    {
        "body": "Yes, you'd be insane. SSD is the only choice",
        "user_id": 11,
        "post_id": 35
    },
    {
        "body": "Here's a counterargument...nah j/k there is no counterargument, SSD is superior in every way",
        "user_id": 13,
        "post_id": 35
    },
    {
        "body": "When are you gonna come help me build MY computer???",
        "user_id": 16,
        "post_id": 35
    },
    {
        "body": "awwww that's so cute!!! I'm so glad you guys had a great time!!",
        "user_id": 17,
        "post_id": 36
    },
    {
        "body": "Disneyland is fun but everyone knows Magic Mountain is superior, get rekt",
        "user_id": 6,
        "post_id": 36
    },
    {
        "body": "Hey at least they didn't go to Knott's Berry Farm amirite",
        "user_id": 9,
        "post_id": 36
    },
    {
        "body": "Bruh, preach. Seeing that movie in theaters for the first time was such an unbelievably charming experience, nothing in the MCU has quite measured up since (except Infinity War)",
        "user_id": 10,
        "post_id": 37
    },
    {
        "body": "Yeah it's a shame the sequel wasn't anywhere near as good. Nor any of their appearances in the Avengers movies. And that Christmas special they just released was kind of a trainwreck. But I'll always love GotG1!",
        "user_id": 20,
        "post_id": 37
    },
    {
        "body": "wat is a galactic guardian, y'all need to touch grass",
        "user_id": 32,
        "post_id": 37
    },
    {
        "body": "People sure seem to like those Dr. Dre headphones, but I've never tried them myself",
        "user_id": 19,
        "post_id": 38
    },
    {
        "body": "Just keep doing what you've been doing, buy $20 headphones every 3 months. This is the way",
        "user_id": 24,
        "post_id": 38
    },
    {
        "body": "get airpods! they're honestly super comfortable and have changed my gym-going life forever 🤩",
        "user_id": 1,
        "post_id": 38
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
