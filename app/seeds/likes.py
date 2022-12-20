from app.models import db, Post, User

def seed_likes():
    post1 = Post.query.get(1)
    demo = User.query.get(1)

    post2 = Post.query.get(2)
    jamie = User.query.get(2)

    post3 = Post.query.get(1)
    jordan = User.query.get(3)

    demo.user_likes.append(post2)
    demo.user_likes.append(post3)
    jamie.user_likes.append(post3)
    jordan.user_likes.append(post1)

    db.session.commit()

def undo_likes():
    db.session.execute("DELETE FROM likes")
    db.session.commit()
