from flask import Blueprint, jsonify, request, redirect, render_template
from app.models import db, User
from sqlalchemy import or_

search_routes = Blueprint("search", __name__)

@search_routes.route("/<query>")
def search(query):
    """
    Query for searching all products
    """

    formatted_query = " ".join(query.split('+'))

    queried_users = User.query.filter(or_(
    User.first_name.ilike(f"%{formatted_query}%"),
    (User.first_name + ' ' + User.last_name).ilike(f"%{formatted_query}%"),
    User.last_name.ilike(f"%{formatted_query}%"),
    User.username.ilike(f"%{formatted_query}%")
    )).all()

    return {"Users": [user.to_dict() for user in queried_users]}
