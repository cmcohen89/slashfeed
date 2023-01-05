import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPosts, likePost, unlikePost } from "../../store/all_posts";

const OnePost = ({ post, setShowLoginModal }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    return (
        <div className='one-post'>
            <div className="one-post-img-container">
                <NavLink to={`/posts/${post.id}`}>
                    <img
                        className='one-post-img'
                        src={post.postImages[post.previewImgId].url} alt=""
                    />
                </NavLink>
            </div>
            <div className="one-post-content">
                <h2 className="one-post-user">
                    <NavLink className='profile-pic-link one-post-profile-pic' to={`/profile/${post.postOwner.id}`}>
                        <img className='one-post-profile-pic' src={post.postOwner.profileImgUrl} alt='' />
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink className='profile-link' to={`/profile/${post.postOwner.id}`}>
                        {post.postOwner.username}
                    </NavLink>
                </h2>
                <div className="one-post-title-and-body">
                    <NavLink className='one-post-title-link' to={`/posts/${post.id}`}>
                        <h3 className="one-post-title">{post.title}</h3>
                    </NavLink>
                    <p className="one-post-body">
                        {post.body.length > 120 ?
                            post.body[119] === ' ' ? `${post.body.substring(0, 119)}...`
                                : `${post.body.substring(0, 120)}...` : post.body}
                    </p>
                </div>
                <h4
                    onClick={async () => {
                        user ?
                            (post.usersWhoLiked[user.id] ?
                                await dispatch(unlikePost(post.id)) :
                                await dispatch(likePost(post.id)))
                            : setShowLoginModal(true)
                        dispatch(getPosts());
                    }}
                    className={`one-post-footer ${user && post.usersWhoLiked[user.id] && "one-post-liked"}`}
                >
                    <NavLink className='read-more' to={`/posts/${post.id}`}>Read More</NavLink>
                    <span className="one-post-likes">
                        {post.likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i>
                    </span>
                </h4>
            </div>
        </div>
    )
}

export default OnePost;
