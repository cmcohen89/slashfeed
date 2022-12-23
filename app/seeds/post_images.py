from app.models import db, PostImage, environment

def seed_post_images():
    post_img1 = PostImage(
        url='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_51/1183959/food-nacia-walsh-christmas-cookies-recipes-tease-today-161222-01.jpg',
        post_id=1,
    )

    post_img2 = PostImage(
        url='https://www.marketplace.org/wp-content/uploads/2016/03/GettyImages-57659136.jpg?fit=740%2C411',
        post_id=2,
    )

    post_img3 = PostImage(
        url='https://img1.wsimg.com/isteam/ip/77ebecd8-038b-443f-8e46-44272529e832/IMG_0692.jpeg',
        post_id=3,
    )

    post_img4 = PostImage(
        url='https://hsnega.files.wordpress.com/2015/05/o-cat-people-dog-people-facebook.jpg',
        post_id=4,
    )

    post_img5 = PostImage(
        url='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-09/woodchuck-396243.jpg?h=e22bf01e&itok=g4boWoWn',
        post_id=5,
    )

    post_img6 = PostImage(
        url='https://farm3.static.flickr.com/2526/4188825611_afa30266a5_b.jpg',
        post_id=6,
    )

    post_img7 = PostImage(
        url='https://i.pinimg.com/originals/1e/83/82/1e8382466efcd1cc7c1f575f7822f89c.jpg',
        post_id=7,
    )

    post_img8 = PostImage(
        url='https://image.benq.com/is/image/benqco/ps5-on-ultrawide-monitor_1200?$ResponsivePreset$',
        post_id=8,
    )

    post_img9 = PostImage(
        url='https://akns-images.eonline.com/eol_images/Entire_Site/201998/rs_1024x759-191008065731-1024-selena-gomez-instagram-10-8.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top',
        post_id=9,
    )

    post_img10 = PostImage(
        url='https://metrolinktrains.com/globalassets/explore/los-angeles/sfmm_apocalypse.jpg',
        post_id=10,
    )

    post_img11 = PostImage(
        url='https://www.gotolouisville.com/imager/assets_simpleviewinc_com/simpleview/image/upload/c_fit,w_800,h_600/crm/louisville/D-B-353674715056a34_35367572-5056-a348-3a8d4432d95bab5d_f69c17b56b270deda0220b2ba6b4d051.jpg',
        post_id=11,
    )
    post_img12 = PostImage(
        url='https://i.imgur.com/BR5IYMA.png',
        post_id=12,
    )
    post_img13 = PostImage(
        url='https://i.imgur.com/hbuGNRb.jpeg',
        post_id=13,
    )
    post_img14 = PostImage(
        url='https://i.imgur.com/63Zz4aa.jpeg',
        post_id=14,
    )
    post_img15 = PostImage(
        url='https://i.imgur.com/NBEIFBz.png',
        post_id=15,
    )
    post_img16 = PostImage(
        url='https://i.redd.it/h388tab4ccf91.jpg',
        post_id=16,
    )
    post_img17 = PostImage(
        url='https://pyxis.nymag.com/v1/imgs/f6f/c29/1f42dcabe45f10b5bc462959f0dd457f05-got-sn-8-ep-5-04.rsquare.w700.jpg',
        post_id=17,
    )
    post_img18 = PostImage(
        url='https://i.redd.it/rzs9jxzunjy61.jpg',
        post_id=18,
    )

    db.session.add(post_img1)
    db.session.add(post_img2)
    db.session.add(post_img3)
    db.session.add(post_img4)
    db.session.add(post_img5)
    db.session.add(post_img6)
    db.session.add(post_img7)
    db.session.add(post_img8)
    db.session.add(post_img9)
    db.session.add(post_img10)
    db.session.add(post_img11)
    db.session.add(post_img12)
    db.session.add(post_img13)
    db.session.add(post_img14)
    db.session.add(post_img15)
    db.session.add(post_img16)
    db.session.add(post_img17)
    db.session.add(post_img18)
    db.session.commit()

def undo_post_images():
    if environment == "production":
            db.session.execute(f"TRUNCATE table post_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM post_images")
        db.session.commit()
