from .db import db

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column("post_id", db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)


followers = db.Table(
    'followers',
    db.Model.metadata,
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('users.id'))
)
