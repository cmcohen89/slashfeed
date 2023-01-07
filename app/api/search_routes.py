from flask import Blueprint, jsonify, request, redirect, render_template
from app.models import db, User
from sqlalchemy import or_

search_routes = Blueprint("search", __name__)

@search_routes.route("/<query>")
def search(query):
    """
    Query for searching all products
    """

    # formatted_query = " ".join(query.split('+'))
    # queried_products = Product.query.filter(or_(Product.title.ilike(f"%{formatted_query}%"), Product.detailed_description.ilike(f"%{formatted_query}%"))).all()

    # return {"query": [product.to_dict() for product in queried_products]}
