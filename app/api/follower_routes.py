from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, likes, User, Post

followers_routes = Blueprint("followers", __name__)

# Get the current user's follows and followers by the current user's ID
@followers_routes.route("/get_follows/current")
def get_curr_user_follows():
    """
    Return the users the current user is following and is followed by,
    each in a set of user dictionaries.
    """

    user = User.query.get(current_user.get_id())
    return {
        "Follows": [user.to_dict() for user in user.followed_users()],
        "Followers": [user.to_dict() for user in user.follower_users()]
    }

# Get a user's follows and followers by user's ID
@followers_routes.route("/get_follows/<int:id>")
def get_follows(id):
    """
    Given a user's ID,
    return the users they are following and are followed by,
    each in a set of user dictionaries.
    """

    user = User.query.get(id)
    return {
        "Follows": [user.to_dict() for user in user.followed_users()],
        "Followers": [user.to_dict() for user in user.follower_users()]
    }


# Follow/Unfollow a user by ID
@followers_routes.route("/follow/<int:id>", methods=["POST"])
@login_required
def handleFollow(id):
    """
    Determine if the current user is following the target user and follow/unfollow accordingly
    """

    user = User.query.get(current_user.get_id())
    target_user = User.query.get(id)

    if not user.is_following(target_user):
        user.follow(target_user)
    else:
        user.unfollow(target_user)

    db.session.commit()
    return {'message': 'follow successfully handled'}
