import { NavLink } from "react-router-dom";

const FeaturedPost = ({ post }) => {
    return (
        <>
            <span className="featured-user-and-title">
                <h5 className='featured-user'>
                    <NavLink className='featured-profile-link' to={`/profile/${post.postOwner.id}`}>
                        <img className='one-post-profile-pic featured-profile-pic' src={post.postOwner.profileImgUrl} alt='' />
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink className='featured-profile-link' to={`/profile/${post.postOwner.id}`}>
                        {post.postOwner.username}
                    </NavLink>
                </h5>
                <h1 className='featured-title'>{post.title}</h1>
            </span>
            <img
                className='featured-img'
                src={post.postImages[post.previewImgId].url} alt=""
            />
        </>
    )
}

export default FeaturedPost;
