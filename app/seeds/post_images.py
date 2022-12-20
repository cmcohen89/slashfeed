from app.models import db, PostImage

def seed_post_images():
    post_img1 = PostImage(
        url='https://media.gettyimages.com/id/154551557/photo/pumpkins.jpg?s=612x612&w=gi&k=20&c=P794HbenXWpZn5riR61kk6qVfyg2WrmOFoEPv9Xb39Y=',
        post_id=1,
    )

    post_img2 = PostImage(
        url='https://media.istockphoto.com/id/1183503172/photo/sunset-at-moorpark-station.jpg?s=612x612&w=0&k=20&c=LBT4sE7ZetoHHl6z_SoqPD6D2p8voQUiOFTfJ4CZnlM=',
        post_id=2,
    )

    post_img3 = PostImage(
        url='https://ca-times.brightspotcdn.com/dims4/default/6cee976/2147483647/strip/true/crop/2205x1470+0+0/resize/840x560!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff6%2F4b%2Fa82d5e864c7698fd06591c5195d5%2F1181476-ig-parking-garages-013.jpg',
        post_id=3,
    )

    db.session.add(post_img1)
    db.session.add(post_img2)
    db.session.add(post_img3)
    db.session.commit()

def undo_post_images():
    db.session.execute("DELETE FROM post_images")
    db.session.commit()
