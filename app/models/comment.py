from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(5000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    comment_owner = db.relationship('User', back_populates='user_comments')
    comment_post = db.relationship('Post', back_populates='post_comments')

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "userId": self.user_id,
            "postId": self.post_id,
            "commentOwner": self.comment_owner.to_dict(),
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }

    def __repr__(self):
        return f"<Comment {self.id}>"
