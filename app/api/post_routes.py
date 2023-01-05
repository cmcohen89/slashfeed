from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Post, PostImage, User
from app.forms.post_form import PostForm, PostUpdateForm, PostImgUpdateForm
from .auth_routes import validation_errors_to_error_messages
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)


# GET ALL POSTS:
@post_routes.route("")
def get_posts():
    """
    Query for all posts and returns them in a list of post dictionaries.
    """

    posts = Post.query.all()
    return {"Posts": [post.to_dict() for post in posts]}


# GET ALL POSTS FROM USERS THE CURRENT USER FOLLOWS:
@post_routes.route("/followed")
@login_required
def get_followed_posts():
    """
    Query for all the posts of the current user's follows and returns them in a list of post dictionaries.
    """

    user = User.query.get(current_user.get_id())
    posts = user.followed_posts()

    return {"Posts": [post.to_dict() for post in posts]}


# GET A SINGLE POST:
@post_routes.route("/<int:id>")
def get_one_post(id):
    """
    Query for a single post by id and return it as a dictionary.
    """

    post = Post.query.get(id)
    return post.to_dict()


# GET POSTS FROM ONE USER
@post_routes.route("/user/<int:id>")
def get_user_posts(id):
    """
    Query for all the posts created by a single user
    """
    posts = Post.query.filter(Post.user_id == id).all()

    return {"Posts": [post.to_dict() for post in posts]}


# GET POSTS ONE USER HAS LIKED
@post_routes.route("/user/<int:id>/liked")
def get_user_liked_posts(id):
    """
    Query for all the posts a single user has liked
    """

    user = User.query.get(id)
    posts = user.user_likes

    return {"Posts": [post.to_dict() for post in posts]}


# CREATE A NEW POST:
@post_routes.route("", methods=["POST"])
@login_required
def create_post():
    """
    A logged-in user can submit a post form to create a new post.
    """

    form = PostForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_post = Post(
            title=data["title"],
            body=data["body"],
            user_id=current_user.get_id(),
            preview_img_id=0
        )

        db.session.add(new_post)
        db.session.commit()

        new_preview_img = PostImage(
            post_id=new_post.to_dict()["id"],
            url=data["preview_img_url"]
        )

        db.session.add(new_preview_img)
        db.session.commit()

        setattr(new_post, "preview_img_id", new_preview_img.to_dict()["id"])

        db.session.commit()

        return new_post.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403


# UPDATE A POST:
@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_post(id):
    """
    Query for a single post by id and update the post if authorized.
    """
    post = Post.query.get(id)
    form = PostUpdateForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        setattr(post, "title", data["title"])
        setattr(post, "body", data["body"])

        db.session.commit()
        return post.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403


# UPLOAD AN IMAGE AND RETURN A URL
@post_routes.route("/img", methods=["POST"])
def upload_image():
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
    return {"url": url}


# UPDATE A POST IMAGE BY ITS ID:
@post_routes.route('/img/<int:id>', methods=['PUT'])
@login_required
def update_img(id):
    """
    Query for a single post image by id and update the image if authorized.
    """
    post_img = PostImage.query.get(id)
    form = PostImgUpdateForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        setattr(post_img, "url", data["preview_img_url"])
        db.session.commit()

        return post_img.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403


# DELETE A POST:
@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    """
    Query for a single post by id and delete the post if authorized.
    """

    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return {"message": "Successfully deleted", "status_code": 200}
