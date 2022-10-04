from crypt import methods
from flask import Blueprint, request
from app.models import db, Video, Comment, User, Like
from flask_login import current_user, login_required
from app.forms.comment_form import CommentForm

video_routes = Blueprint('videos', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
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

    video_lst = video.to_dict()
    # comment_lst = [comment.to_dict() for comment in comments]
    # print('\n\n\n', comment_lst, '\n\n\n')

    # video_lst['comments'] = comment_lst

    # print('\n\n\n', video_lst, '\n\n\n')

    return {
        'video': video_lst
    }

# @video_routes.route('/<int:id>')
# def get_video_by_id(id):
#     video = Video.query.get(id)
#     comments = Comment.query.filter(Comment.video_id == id).all()

#     if not video:
#         return {"message": "Video could not be found", "statusCode": 404}, 404

#     return {
#         'video': video.to_dict(),
#         'comments': [comment.to_dict() for comment in comments]
#     }

@video_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_video_by_id(id):
    video = Video.query.get(id)
    if not video:
        return {"message": "Video could not be found", "statusCode": 404}, 404
    
    if video.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    print('\n\n\n\n', request.get_json()['description'], '\n\n\n\n')

    title = request.get_json()['title']
    description = request.get_json()['description']

    video.title = title
    video.description = description

    db.session.commit()

    return {
        "video": video.to_dict()
    }

@video_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_video_by_id(id):
    video = Video.query.get(id)
    if not video:
        return {"message": "Video could not be found", "statusCode": 404}, 404
    
    if video.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    db.session.delete(video)
    db.session.commit()

    return {
        "message": "Successfully deleted",  "statusCode": 200
    }, 200


@video_routes.route('/<int:id>/comments')
def get_comments_for_video_by_id(id):
    video = Video.query.get(id)

    if not video:
        return {"message": "Video could not be found", "statusCode": 404}, 404

    comments = Comment.query.filter(Comment.video_id == id).order_by(Comment.time_created.desc()).all()
    print('\n\n\n', comments)

    return {'Comments': [comment.to_dict() for comment in comments]}


@video_routes.route('/<int:id>/comments', methods=["POST"])
@login_required
def post_comment_for_video(id):
    video = Video.query.get(id)

    if not video:
        return {"message": "Video could not be found", "statusCode": 404}, 404

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        comment = Comment(
            user_id = current_user.id,
            video_id = id,
            comment = form.comment.data
        )

        # form.populate_obj(comment)

        db.session.add(comment)
        db.session.commit()

        return comment.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@video_routes.route('/<int:id>/like', methods=["POST"])
@login_required
def post_like_for_video(id):
    Video.query.get(id)
    like = Like(user_id = current_user.id, video_id = id)
    db.session.add(like)
    db.session.commit()
    return like.to_dict()


@video_routes.route('/likes/<int:id>', methods=['DELETE'])
@login_required
def delete_like_for_video(id):
    like = Like.query.get(id)
    db.session.delete(like)
    db.session.commit()
    return {
        "message": "Successfully deleted",  "statusCode": 200
    }, 200
    



    

    