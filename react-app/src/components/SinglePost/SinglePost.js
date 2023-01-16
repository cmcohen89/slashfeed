import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { likePost, unlikePost } from "../../store/all_posts";
import { getSinglePost } from "../../store/one_post";
import Comments from "../Comments/Comments";
import './SinglePost.css';

const SinglePost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const { id } = useParams();
    const singlePost = useSelector(state => state.onePost[id]);

    useEffect(() => {
        dispatch(getSinglePost(id));
    }, [dispatch, id])

    if (!singlePost) return null;
    if (!user) history.push('/')

    return (
        <div className="single-post-page-container">
            <div className="single-post-title-container">
                <h3 className="single-post-title">{singlePost.title}</h3>
            </div>
            <div className="single-post-content-container">
                <div className="single-post-page">
                    <img
                        className="single-post-img"
                        src={singlePost.postImages[singlePost.previewImgId].url}
                        alt=""
                    />
                    <div className="single-post-subheader">
                        <span className="single-post-user-and-date">
                            <span className="single-post-user">
                                <NavLink className='profile-link' to={`/profile/${singlePost.postOwner.id}`}>
                                    <img className='one-post-profile-pic' src={singlePost.postOwner.profileImgUrl} alt='' />
                                </NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <NavLink className='profile-link' to={`/profile/${singlePost.postOwner.id}`}>
                                    {singlePost.postOwner.username}
                                </NavLink>
                                &nbsp;&nbsp; / &nbsp;&nbsp;
                            </span>
                            <span className="single-post-date">
                                {(new Date(singlePost.createdAt)).toLocaleTimeString()},&nbsp;
                                {(new Date(singlePost.createdAt)).toDateString()}
                            </span>
                        </span>
                        <span
                            onClick={async () => {
                                singlePost.usersWhoLiked[user.id] ?
                                    await dispatch(unlikePost(singlePost.id)) :
                                    await dispatch(likePost(singlePost.id))
                                dispatch(getSinglePost(id));
                            }}
                            className={`single-post-likes ${user && singlePost.usersWhoLiked[user.id] ? "one-post-liked" : ""}`}
                        >
                            {singlePost.likes}&nbsp;&nbsp;
                            <i className="fa-solid fa-thumbs-up"></i>
                        </span>
                    </div>
                    <p className="single-post-body">{singlePost.body}</p>
                </div>
                <Comments postId={singlePost.id} />
            </div>
        </div>
    )
}

export default SinglePost;
