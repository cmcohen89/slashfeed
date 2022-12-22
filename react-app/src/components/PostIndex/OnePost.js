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
                    <span className="relationship">FRIEND</span>
                    &nbsp;&nbsp; / &nbsp;&nbsp;
                    {post.postOwner.username}
                </h2>
                <NavLink className='one-post-title-link' to={`/posts/${post.id}`}>
                    <h3 className="one-post-title">{post.title}</h3>
                </NavLink>
                <p className="one-post-body">{post.body}</p>
                <h4
                    onClick={async () => {
                        user ?
                            (post.usersWhoLiked[user.id] ?
                                await dispatch(unlikePost(post.id)) :
                                await dispatch(likePost(post.id)))
                            : setShowLoginModal(true)
                        dispatch(getPosts());
                    }}
                    className={`one-post-likes ${user && post.usersWhoLiked[user.id] ? "one-post-liked" : ""}`}
                >
                    {post.likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i>
                </h4>
            </div>
        </div>
    )
}

export default OnePost;
