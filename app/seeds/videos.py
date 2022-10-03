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

    videos = [
        {
            "owner_id" : 2,
            "title" : "usa vs japan 1/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/28cc64b0c564451d8475782f39028b2e.mp4",
            "description" : "My friends at canada open"
        },
        {
            "owner_id" : 2,
            "title" : "usa vs japan 2/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/939e518a403e4ee0a2602b50a47d079d.mp4",
            "description" : "My friends at canada open" 
        },
        {
            "owner_id" : 2,
            "title" : "usa vs japan 3/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/2f905730c52a4fe39ea61f0709dc0055.mp4",
            "description" : "My friends at canada open"
        },
        {
            "owner_id" : 2,
            "title" : "usa vs japan 4/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/e9e6194560cc4cfd878dd1a006703327.mp4",
            "description" : "My friends at canada open"
        },
        {
            "owner_id" : 2,
            "title" : "usa vs japan 5/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/0e702f73d6e84109bdb29aaeb66eea7c.mp4",
            "description" : "My friends at canada open"
        },
        {
            "owner_id" : 2,
            "title" : "usa vs japan 6/7",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/9c525129469e4961b20fcaa8d4d638ad.mp4",
            "description" : "My friends at canada open"
        }
    ]
        # {
        #     "owner_id" : 2,
        #     "title" : "usa vs japan 7/7",
        #     "video" : "",
        #     "description" : "My friends at canada open"
        # },
        # {
        #     "owner_id" : ,
        #     "title" : ,
        #     "video" : ,
        #     "description" :
        # },

    

    db.session.add(video_1)
    db.session.add(video_2)
    db.session.add(video_3)
    db.session.add(video_4)

    for video in videos:
        new_video = Video(
            owner_id = video["owner_id"],
            title = video["title"],
            video = video["video"],
            description = video["description"]
        )
        db.session.add(new_video)

    db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()