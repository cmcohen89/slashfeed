from .db import db
from .join import user_message_threads


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    message_thread_id = db.Column(db.Integer, db.ForeignKey('message_threads.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    message_owner = db.relationship('User', back_populates='user_messages')

    def to_dict(self):
        return {
            "id": self.id,
            "message": self.message,
            "messageOwner": self.message_owner.to_dict(),
            "createdAt": self.created_at,
        }

    def __repr__(self):
        return f"<Message {self.id}>"


class MessageThread(db.Model):
    __tablename__ = 'message_threads'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    chat_users = db.relationship('User', back_populates='user_chats', secondary=user_message_threads, lazy='joined')

    def to_dict(self):
        return {
            "id": self.id,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }

    def __repr__(self):
        return f"<Message Thread {self.id}>"
