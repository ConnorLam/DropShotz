from flask import Blueprint, request
from app.models import db, Video, video
from flask_login import current_user, login_required
from app.AWS_upload import (
    upload_file_to_s3, allowed_file, get_unique_filename)

upload_routes = Blueprint("upload", __name__)


@upload_routes.route("", methods=["POST"])
@login_required
def upload_video():
    video = request.files["video"]
    title = request.form["title"]
    description = request.form['description']

    # print('\n\n\n', request.files, '\n\n\n')

    if "video" not in request.files:
        return {"errors": "video required"}, 400

    if 'title' not in request.form:
        return {"errors": "title required"}, 400

    if 'description' not in request.form:
        return {"errors": "description required"}, 400

    if not allowed_file(video.filename):
        return {"errors": "file type not permitted"}, 400
    
    video.filename = get_unique_filename(video.filename)

    upload = upload_file_to_s3(video)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_video = Video(user=current_user, video=url, title=title, description=description)
    db.session.add(new_video)
    db.session.commit()
    return {"url": url}