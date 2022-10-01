from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Video, Comment, db
from flask_login import current_user, login_required
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/<int:commentId>', methods=["PUT"])
@login_required
def edit_comment(commentId):
    print('\n\n\n\n', request.data, '\n\n\n')
    comment = Comment.query.get(commentId)

    if not comment:
        return {"message": "Comment could not be found", "statusCode": 404}, 404

    if current_user.id != comment.user_id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print('\n\n\n\n', form.errors, '\n\n\n')
    if form.validate_on_submit():

        comment.comment = form.comment.data
        # print('\n\n\n\n', comment.comment, '\n\n\n')

        db.session.add(comment)
        db.session.commit()

        return comment.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):

    comment = Comment.query.get(commentId)

    if not comment:
        return {"message": "Comment could not be found", "statusCode": 404}, 404

    if current_user.id != comment.user_id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    db.session.delete(comment)
    db.session.commit()

    return {"message": "Successfully deleted", "statusCode": 200}, 200
