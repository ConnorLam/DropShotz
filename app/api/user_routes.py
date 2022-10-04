from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Video

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)

    if not user:
        return {"message": "User could not be found", "statusCode": 404}, 404
    # video = Video.query.filter(Video.owner_id == id).all()
    return user.video_to_dict()
