from app.models import db, Comment, Video
from random import randint


def seed_comments():
    comment_1 = Comment(
        video_id = 1,
        user_id = 3,
        comment = 'lol i thought this was a badminton site?'
    )

    comments = [
        f'SIUUUUUUUUUU',
        f'NICE SHOT',
        f'WHAT A RALLY',
        f'Woahhhhhhhhhhhhh',
        f'that was kinda bonkas',
        f'How did you do that???',
        f'back in my day that was easyyyyyyyy',
        f'How is this not viral?!?!?!'
    ]

    for num in range(1, 10):
        for comment_num in range(0, randint(3, 10)):

            newComment = Comment(
                video_id = num,
                user_id = randint(1, 25),
                comment = comments[randint(0, 7)]
            )
            db.session.add(newComment)
        

    db.session.commit()



def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()