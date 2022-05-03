"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def Newuser():
        body_email = request.json.get(email)
        email = User(email=body_name)
        body_password = request.json.get(password)
        password = User(password=body_password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"User": User.email}), 200

  