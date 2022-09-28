from app.models import db, Video

def seed_videos():
    video_1 = Video(
        owner_id = 2,
        title = 'Not even a badminton video',
        video = 'https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/1843f0df86e043ca9607094171962336.mp4',
        description = 'sorry this is just a seeder for now'
    )

    db.session.add(video_1)
    db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()