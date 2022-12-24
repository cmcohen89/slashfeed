from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from .auth_routes import validation_errors_to_error_messages
from app.forms.post_form import PostImgUpdateForm
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

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


# UPDATE THE CURRENT USER'S PROFILE IMAGE USING AWS
@user_routes.route("/img", methods=["POST"])
@login_required
def upload_image():
    print('''




    ''', 'hey now')

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    user = User.query.get(current_user.get_id())

    setattr(user, "profile_img_url", url)

    db.session.commit()
    return {"url": url}
