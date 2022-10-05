from .db import db
from sqlalchemy.sql import func


class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    title = db.Column(db.String, nullable = False)
    video = db.Column(db.String, nullable = False)
    thumbnail = db.Column(db.String)
    description = db.Column(db.String, nullable = False)
    time_created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    time_updated = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship('User', back_populates='videos')
    comments = db.relationship('Comment', back_populates='video', cascade='all, delete-orphan')
    likes = db.relationship('Like', back_populates = 'video', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "title" : self.title,
            "video" : self.video,
            "description" : self.description,
            "timeCreated" : self.time_created,
            "timeUpdated" : self.time_updated,
            "user" : self.user.to_dict(),
            "likes": [like.to_dict() for like in self.likes]
        }

    def no_likes_to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "title" : self.title,
            "video" : self.video,
            "description" : self.description,
            "timeCreated" : self.time_created,
            "timeUpdated" : self.time_updated,
            "user" : self.user.to_dict(),
        }

    def no_user_to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "title" : self.title,
            "video" : self.video,
            "description" : self.description,
            "timeCreated" : self.time_created,
            "timeUpdated" : self.time_updated,
            # "user" : self.user.to_dict()
        }