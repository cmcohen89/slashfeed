from app.models import db, Post

def seed_posts():
    post1 = Post(
        title='Test Post 1',
        body='This is a test post.',
        user_id=1,
        preview_img_id=1
    )

    post2 = Post(
        title='Test Post 2',
        body='This is another test post.',
        user_id=2,
        preview_img_id=2
    )

    post3 = Post(
        title='Test Post 3',
        body='This is the third test post.',
        user_id=3,
        preview_img_id=3
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.commit()

def undo_posts():
    db.session.execute("DELETE FROM posts")
    db.session.commit()
