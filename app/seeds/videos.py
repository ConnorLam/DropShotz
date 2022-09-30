from turtle import title
from app.models import db, Video

def seed_videos():
    video_1 = Video(
        owner_id = 2,
        title = 'Cool Point',
        video = 'https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/dfb422030e364725b71e69db4060b70c.mp4',
        description = 'end of my career'
    )

    video_2 = Video(
        owner_id = 2,
        title = 'First tourney back from surgery',
        video = 'https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/502b9562546d4c7e80bbc342791b2ee5.mp4',
        description = 'i was so out of shape'
    )

    video_3 = Video(
        owner_id = 2,
        title = 'The Badminton dunk',
        video = 'https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/3e7c036de665404c9bf426a89501e08f.mp4',
        description = 'This is what badminton players call a dunk'
    )
    
    video_4 = Video(
        owner_id = 1,
        title = 'Hi edgar',
        video = 'https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/827430d2920d403dbc1858cb60601390.mp4',
        description = 'SHOUTOUT EDGAR'
    )

    

    db.session.add(video_1)
    db.session.add(video_2)
    db.session.add(video_3)
    db.session.add(video_4)
    db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()