import { NavLink } from "react-router-dom";

const SideFeaturedPost = ({ post }) => {
    return (
        <>
            <span className="side-featured-user-and-title">
                <h5 className='side-featured-user'>
                    <NavLink className='featured-profile-link' to={`/profile/${post.postOwner.id}`}>
                        <img className='one-post-profile-pic' src={post.postOwner.profileImgUrl} alt='' />
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink className='featured-profile-link' to={`/profile/${post.postOwner.id}`}>
                        {post.postOwner.username}
                    </NavLink>
                </h5>
                <h1 className='side-featured-title'>{post.title}</h1>
            </span>
            <div className="img-gradient">
                <img
                    className='side-featured-img'
                    src={post.postImages[post.previewImgId].url} alt=""
                />
            </div>
        </>
    )
}

export default SideFeaturedPost;
