from .db import db
from .join import likes


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    body = db.Column(db.String(5000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    preview_img_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    post_owner = db.relationship('User', back_populates='user_posts')
    users_who_liked = db.relationship('User', back_populates='user_likes', secondary=likes, lazy='joined')
    post_images = db.relationship('PostImage', back_populates='image_post', cascade='all, delete')
    post_comments = db.relationship('Comment', back_populates='comment_post', cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "previewImgId": self.preview_img_id,
            "postOwner": self.post_owner.to_dict(),
            "postImages": {image.to_dict()["id"]: image.to_dict() for image in self.post_images},
            "usersWhoLiked": {user.to_dict()["id"]: user.to_dict() for user in self.users_who_liked},
            "likes": len([user.to_dict() for user in self.users_who_liked]),
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }


    def __repr__(self):
        return f"<Post {self.id}: {self.title}>"


class PostImage(db.Model):
    __tablename__ = 'post_images'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(1500), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    image_post = db.relationship('Post', back_populates='post_images')

    def to_dict(self):
        return {
            "id": self.id,
            "url": self.url,
            "postId": self.post_id,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }

    def __repr__(self):
        return f"<Image ID: {self.id}, Post ID: {self.post_id}>"
