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
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | What vision from Thom Gicquel to save this point!",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/ea4ff8ce7f56484abdffda870e58b027.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Viktor Axelsen's persistence eventually pays off against Kodai Naraoka",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/fcaaa764e05b4e3e9c45894f6f513ef6.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Rasmus Gemke with an unbelievable shot! Have a look at this",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/04f784c1f5b54534ac8601f14ba821db.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Feng/Huang taking control in this remarkable rally to save match point",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/1ad9bc360cb440ea82623116f3b75e7f.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Yuta Watanabe saves the match with a stroke of genius!",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/1ad9bc360cb440ea82623116f3b75e7f.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | A 40-shot masterclass from Viktor Axelsen and Anthony Sinisuka Ginting",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/686abf0690514936b359d4a767bdf88e.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Loh Kean Yew steps it up a gear to close out in six straight points",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/c46654a2b526497397aa2f7846452d19.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Whet your appetite for action with this absolute stunner",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/5f6909ca192a4e568845befc0ae20e54.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Lee/Wang masterfully craft this point against Boon/Wong",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/54929d65bb2646fcbbe23a0bd5104f3d.mp4",
            "description": "BWF play of the day!!"
        },
        {
            "owner_id" : 26,
            "title" : "HSBC Play of the Day | Fajar Alfian takes flight and stuns Chia/Soh with this magnificent drop shot",
            "video" : "https://connorlam-dropshotz-bucket.s3.us-west-1.amazonaws.com/5a354d41b14944c5a9d666f3329dde6e.mp4",
            "description": "BWF play of the day!!"
        },
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