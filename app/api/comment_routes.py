from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Comment
from app.forms.comment_form import CommentForm
from .auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)


# GET ALL COMMENTS OF SINGLE POST:
@comment_routes.route("/<int:post_id>")
def get_comments(post_id):
    """
    Query for all comments of a single post and returns them in a list of dictionaries.
    """
    comments = Comment.query \
        .filter(Comment.post_id == post_id).all()

    return {"Comments": [comment.to_dict() for comment in comments]}


# CREATE A COMMENT FOR A SINGLE POST:
@comment_routes.route('/<int:post_id>', methods=["POST"])
@login_required
def create_comment(post_id):
    """
    A logged-in use can create a comment associated with a single post and return it as a dictionary.
    """

    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        new_comment = Comment(
            body=data["body"],
            user_id=current_user.get_id(),
            post_id=post_id
        )

        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403


# UPDATE A COMMENT BY ID
@comment_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_comment(id):
    """
    A logged-in user can update a comment by its ID and return it as a dictionary.
    """
    comment = Comment.query.get(id)
    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        setattr(comment, "body", data["body"])
        db.session.commit()
        return comment.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 403


# DELETE A COMMENT BY ID:
@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    """
    Query for a single comment by id and delete the comment if authorized.
    """

    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Successfully deleted", "status_code": 200}
