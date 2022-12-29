from .db import db
from .post import Post
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .join import likes, followers, user_message_threads

class User(db.Model, UserMixin):
    __tablename__ = 'users'


    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img_url = db.Column(db.String(1500), server_default='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png')


    user_posts = db.relationship('Post', back_populates='post_owner', cascade='all, delete')
    user_comments = db.relationship('Comment', back_populates='comment_owner', cascade='all, delete')
    user_messages = db.relationship('Message', back_populates='message_owner', cascade='all, delete')
    user_likes = db.relationship('Post', back_populates='users_who_liked', secondary=likes, lazy='joined')
    user_chats = db.relationship('MessageThread', back_populates='chat_users', secondary=user_message_threads, lazy='joined')
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


    def followed_posts(self):
        followed = Post.query.join(
            followers, (followers.c.followed_id == Post.user_id)).filter(
                followers.c.follower_id == self.id)
        own = Post.query.filter_by(user_id=self.id)
        return followed.union(own)


    def followed_users(self):
        followed = User.query.join(
            followers, (followers.c.followed_id == User.id)).filter(
                followers.c.follower_id == self.id)
        return followed


    def follower_users(self):
        follower = User.query.join(
            followers, (followers.c.follower_id == User.id)).filter(
                followers.c.followed_id == self.id)
        return follower


    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'username': self.username,
            'email': self.email,
            'profileImgUrl': self.profile_img_url,
            'postCount': len([post for post in self.user_posts])
        }
