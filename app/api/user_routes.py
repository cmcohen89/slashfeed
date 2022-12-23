from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from .auth_routes import validation_errors_to_error_messages
from app.forms.post_form import PostImgUpdateForm

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/img/<int:id>', methods=["PUT"])
@login_required
def update_profile_pic(id):
    """
    Query for a single user by id and update the user's profile image if authorized.
    """
    user = User.query.get(id)
    form = PostImgUpdateForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        setattr(user, "profile_img_url", data["preview_img_url"])
        db.session.commit()

        return user.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403
