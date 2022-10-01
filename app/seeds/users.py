import profile
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', username='Demo', email='demo@aa.io', password='password', profile_picture="https://blog.playo.co/wp-content/uploads/2017/04/feather-shuttlecock.jpg")
    connor = User(
        first_name='Connor', last_name='Lam', username='connor', email='connor@aa.io', password='password', profile_picture='https://i1.sndcdn.com/avatars-lOjsNydIRiF4SYQm-dLVNzg-t240x240.jpg')
    irene = User(
        first_name='Irene', last_name='Lee', username='irene', email='irene@aa.io', password='password', profile_picture='https://i1.sndcdn.com/avatars-lOjsNydIRiF4SYQm-dLVNzg-t240x240.jpg')

    db.session.add(demo)
    db.session.add(connor)
    db.session.add(irene)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
