import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deletePost, getPosts, likePost, unlikePost } from "../../store/all_posts";
import UpdatePostForm from "../PostForm/UpdatePostForm";

const ProfilePost = ({ post, user, setPostType }) => {
    const dispatch = useDispatch();
    const [updatePost, setUpdatePost] = useState(false);
    const currUser = useSelector(state => state.session.user)

    return (
        <div className='one-profile-post'>
            <div className="one-post-img-container">
                <NavLink to={`/posts/${post.id}`}>
                    <img className='one-post-img' src={post.postImages[post.previewImgId].url} alt="" />
                </NavLink>
            </div>
            <div className="one-post-content">
                <h2 className="one-post-user">
                    <NavLink onClick={() => setPostType('user posts')} className='profile-pic-link one-post-profile-pic' to={`/profile/${post.postOwner.id}`}>
                        <img className='one-post-profile-pic' src={post.postOwner.profileImgUrl} alt='' />
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink onClick={() => setPostType('user posts')} className='profile-link' to={`/profile/${post.postOwner.id}`}>
                        {post.postOwner.username}
                    </NavLink>
                </h2>
                <div className="one-post-title-and-body">
                    <NavLink className='one-post-title-link' to={`/posts/${post.id}`}>
                        <h3 className="one-post-title">{post.title}</h3>
                    </NavLink>
                    <p className="one-post-body">{post.body}</p>
                </div>
                <h4
                    onClick={async () => {
                        currUser && post.usersWhoLiked[currUser.id] ?
                            await dispatch(unlikePost(post.id)) :
                            await dispatch(likePost(post.id))
                        dispatch(getPosts());
                    }}
                    className={`profile-likes ${currUser && post.usersWhoLiked[currUser.id] && "one-post-liked"}`}
                >
                    {post.likes} <i className="fa-solid fa-thumbs-up"></i></h4>
                {currUser && currUser.id === post.postOwner.id && <div className="profile-buttons">
                    <span
                        className='update-comment-button'
                        onClick={() => setUpdatePost(!updatePost)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </span>
                    <span
                        className='delete-comment-button'
                        onClick={() => dispatch(deletePost(post.id))}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    <div className={`modal container ${updatePost ? "update-post-show" : ""}`}>
                        <UpdatePostForm post={post} setUpdatePost={setUpdatePost} />
                    </div>
                    <div
                        className={`overlay ${updatePost ? "show" : ""}`}
                        onClick={() => setUpdatePost(!updatePost)}
                    />
                </div>}
            </div>
        </div>
    )
}

export default ProfilePost;
