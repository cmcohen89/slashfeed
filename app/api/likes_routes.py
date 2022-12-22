from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, likes, User, Post


likes_routes = Blueprint("likes", __name__)


# ADD A LIKE TO A POST BY POST ID
@likes_routes.route("/<int:id>", methods=["POST"])
@login_required
def add_like(id):
    """
    A logged-in user can add a like to any post by its ID.
    """

    user = User.query.get(current_user.get_id())
    post = Post.query.get(id)
    user.user_likes.append(post)

    db.session.commit()

    return {"message": "successfully liked post"}


# REMOVE A LIKE FROM A POST BY POST ID
@likes_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def remove_like(id):
    """
    A logged-in user can remove a like from any post by its ID.
    """

    user = User.query.get(current_user.get_id())
    post = Post.query.get(id)
    user.user_likes.remove(post)

    db.session.commit()

    return {"message": "successfully unliked post"}
