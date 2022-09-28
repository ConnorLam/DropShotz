from flask import Blueprint, request
from app.models import db, Video, Comment
from flask_login import current_user, login_required

video_routes = Blueprint('videos', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@video_routes.route('')
def get_all_videos():
    videos = Video.query.all()

    return {
        'videos': [video.to_dict() for video in videos]
    }


@video_routes.route('/current')
@login_required
def get_video_of_user():
    videos = Video.query.filter(Video.owner_id == current_user.id).all()

    return {
        'videos': [video.to_dict() for video in videos]
    }


@video_routes.route('/<int:id>')
def get_video_by_id(id):
    video = Video.query.get(id)
    comments = Comment.query.filter(Comment.video_id == id).all()

    if not video:
        return {"message": "Video could not be found", "statusCode": 404}, 404

    return {
        'video': video.to_dict(),
        'comments': [comment.to_dict() for comment in comments]
    }

    

    