"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def Register_user():
        body_email = request.json.get("email")
        body_password = request.json.get("password")
        new_user = User(email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"User": new_user.serialize()}), 200


@api.route('/login', methods=['POST'])
def login_in():
        body_email = request.json.get("email")
        body_password = request.json.get("password")
        user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if user: 
                token = create_access_token(identity = user.id)
                return jsonify({"msg" : "User logged in", "token":token}), 200
        
        else: 
                return jsonify({"msg" : "User does not exist"}), 400
       