from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Post, PostImage
from app.forms.post_form import PostForm, PostUpdateForm
from .auth_routes import validation_errors_to_error_messages

post_routes = Blueprint('posts', __name__)

# GET ALL POSTS:
@post_routes.route("")
def get_posts():
    """
    Query for all posts and returns them in a list of post dictionaries.
    """

    posts = Post.query.all()
    return {"Posts": [post.to_dict() for post in posts]}


# GET A SINGLE POST:
@post_routes.route("/<int:id>")
def get_one_post(id):
    """
    Query for a single post by id and return it as a dictionary.
    """

    post = Post.query.get(id)
    return post.to_dict()


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
