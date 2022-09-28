from app.models import db, Comment, video


def seed_comments():
    comment_1 = Comment(
        video_id = 1,
        user_id = 3,
        comment = 'lol i thought this was a badminton site?'
    )

    db.session.add(comment_1)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()