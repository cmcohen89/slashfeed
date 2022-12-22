from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .join import likes, followers

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img_url = db.Column(db.String(1500))

    user_posts = db.relationship('Post', back_populates='post_owner', cascade='all, delete')
    user_comments = db.relationship('Comment', back_populates='comment_owner', cascade='all, delete')
    user_messages = db.relationship('Message', back_populates='message_owner', cascade='all, delete')
    # user_message_threads = db.relationship('MessageThread', back_populates='message_thread_users', cascade='all, delete')
    user_likes = db.relationship('Post', back_populates='users_who_liked', secondary=likes, lazy='joined')
    followed = db.relationship('User', secondary=followers, primaryjoin=(followers.c.follower_id == id), secondaryjoin=(followers.c.followed_id == id), backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(
            followers.c.followed_id == user.id).count() > 0

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'username': self.username,
            'email': self.email,
            'profileImgUrl': self.profile_img_url
        }
