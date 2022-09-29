from .db import db
from sqlalchemy.sql import func

class Comment(db.Model):
    __tablename__='comments'

    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment = db.Column(db.String, nullable=False)
    time_created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    time_updated = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship('User', back_populates='comments')
    video = db.relationship('Video', back_populates='comments')


    def to_dict(self):

        return {
            "id": self.id,
            "videoId": self.video_id,
            "userId": self.user_id,
            "comment": self.comment,
            "timeCreated": self.time_created,
            "timeUpdated": self.time_updated,
            "user": self.user.to_dict()
        }