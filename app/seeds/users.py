import email
import profile
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', username='Demo', email='demo@aa.io', password='password', profile_picture="https://blog.playo.co/wp-content/uploads/2017/04/feather-shuttlecock.jpg")
    connor = User(
        first_name='Connor', last_name='Lam', username='connor', email='connor@aa.io', password='password', profile_picture='https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png')
    irene = User(
        first_name='Irene', last_name='Lee', username='irene', email='irene@aa.io', password='password', profile_picture='https://i1.sndcdn.com/avatars-lOjsNydIRiF4SYQm-dLVNzg-t240x240.jpg')
    tyler = User(
        first_name='Tyler', last_name='Jean', username='tJean', email='tyler@aa.io', password='password', profile_picture='https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png')
    edward = User(
        first_name='Edward', last_name='Felipe', username='eFelipe', email='edward@aa.io', password='password', profile_picture='https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png')
    aVenida = User(
        first_name='Alec', last_name='Venida', username='aVenida', email='avenida@aa.io', password='password'
    )
    aGonglach = User(
        first_name='Alex', last_name='Gonglach', username='aGonglach', email='agonglach@aa.io', password='password'
    )
    bWaldee = User(
        first_name='Ben', last_name='Waldee', username='bWaldee', email='bwaldee@aa.io', password='password'
    )
    cOu = User(
        first_name='Cecilia', last_name='Ou', username='cOu', email='cou@aa.io', password='password'
    )
    cChen = User(
        first_name='Chen', last_name='Chen', username='cChen', email='cchen@aa.io', password='password'
    )
    dTing = User(
        first_name='David', last_name='Ting', username='dTing', email='dting@aa.io', password='password'
    )
    dHoffman = User(
        first_name='Daniel', last_name='Hoffman', username='dHoffman', email='dhoffman@aa.io', password='password'
    )
    eLee = User(
        first_name='Edgar', last_name='Lee', username='eLee', email='elee@aa.io', password='password'
    )
    eLinzer = User(
        first_name='El', last_name='Linzer', username='eLinzer', email='elinzer@aa.io', password='password'
    )
    fPalacios = User(
        first_name='Francisco', last_name='Palacios', username='fPalacios', email='fpalacios@aa.io', password='password'
    )
    gManiti = User(
        first_name='Giordan', last_name='Maniti', username='gManiti', email='gmaniti@aa.io', password='password'
    )
    jChew = User(
        first_name='Jason', last_name='Chew', username='jChew', email='jchew@aa.io', password='password'
    )
    jJung = User(
        first_name='Julie', last_name='Jung', username='jJung', email='jjung@aa.io', password='password'
    )
    jKam = User(
        first_name='JB', last_name='Kam', username='jKam', email='jkam@aa.io', password='password'
    )
    jJang = User(
        first_name='Justine', last_name='Jang', username='jJang', email='jjang@aa.io', password='password'
    )
    lNazari = User(
        first_name='Ladan', last_name='Nazari', username='lNazari', email='lnazari@aa.io', password='password'
    )
    hGuzzetti = User(
        first_name='Hazel', last_name='Guzzetti', username='hGuzzetti', email='hguzzetti@aa.io', password='password'
    )
    rHenry = User(
        first_name='Ray', last_name='Henry', username='rHenry', email='rhenry@aa.io', password='password'
    )
    rNguyen = User(
        first_name='Rudy', last_name='Nguyen', username='rNguyen', email='rNguyen@aa.io', password='password'
    )
    tYang = User(
        first_name='Tiffany', last_name='Yang', username='tYang', email='tyang@aa.io', password='password'
    )
    bwf = User(
        first_name='Badminton World', last_name='Federation', username='BWF', email='bwf@aa.io', password='password', profile_picture='https://yt3.ggpht.com/ytc/AMLnZu_BqDMyp9oOvKH4HTGqQoTOrykvLOaQlP3Q9nizjA=s900-c-k-c0x00ffffff-no-rj'
    )

    db.session.add(demo)
    db.session.add(connor)
    db.session.add(irene)
    db.session.add(tyler)
    db.session.add(edward)

    db.session.add(aVenida)
    db.session.add(aGonglach)
    db.session.add(bWaldee)
    db.session.add(cOu)
    db.session.add(cChen)
    db.session.add(dTing)
    db.session.add(dHoffman)
    db.session.add(eLee)
    db.session.add(eLinzer)
    db.session.add(fPalacios)
    db.session.add(gManiti)
    db.session.add(jChew)
    db.session.add(jJung)
    db.session.add(jKam)
    db.session.add(jJang)
    db.session.add(lNazari)
    db.session.add(hGuzzetti)
    db.session.add(rHenry)
    db.session.add(rNguyen)
    db.session.add(tYang)
    db.session.add(bwf)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
