from .db import db

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='likes')
    video = db.relationship("Video", back_populates = 'likes')

    def to_dict(self):
        return {
           "id": self.id,
           "videoId": self.video_id,
           "userId": self.user_id 
        }