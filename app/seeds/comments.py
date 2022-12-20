from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        body='This is a comment.',
        user_id=2,
        post_id=1
    )

    comment2 = Comment(
        body='This is another comment.',
        user_id=3,
        post_id=2
    )

    comment3 = Comment(
        body='This is a third comment.',
        user_id=1,
        post_id=3
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()

def undo_comments():
    db.session.execute("DELETE FROM comments")
    db.session.commit()
