import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { likePost, unlikePost } from "../../store/all_posts";
import { getUserLikedPosts, getUserPosts } from "../../store/user_posts";
import UpdatePostForm from "../PostForm/UpdatePostForm";
import UpdateImage from "../UpdateImage/UpdateImage";
import ConfirmDelete from "./ConfirmDelete";

const ProfilePost = ({ post, setPostType, user }) => {
    const dispatch = useDispatch();
    const [updatePost, setUpdatePost] = useState(false);
    const currUser = useSelector(state => state.session.user)
    const [showUpdateImage, setShowUpdateImage] = useState(false);
    const [confirmDelete, showConfirmDelete] = useState(false);

    return (
        <div className='one-profile-post'>
            <div className={`modal container ${showUpdateImage ? "update-comment-show" : ""}`}>
                <UpdateImage showUpdateImage={showUpdateImage} setShowUpdateImage={setShowUpdateImage} imgId={post.previewImgId} user={user} />
            </div>
            <div
                className={`overlay ${showUpdateImage ? "show" : ""}`}
                onClick={() => setShowUpdateImage(!setShowUpdateImage)}
            />
            <div className={`modal container ${confirmDelete ? "update-comment-show" : ""}`}>
                <ConfirmDelete showConfirmDelete={showConfirmDelete} postId={post.id} user={user} />
            </div>
            <div
                className={`overlay ${confirmDelete ? "show" : ""}`}
                onClick={() => showConfirmDelete(!showConfirmDelete)}
            />
            <div className="one-profile-post-img-container">
                {currUser && currUser.id === post.postOwner.id && <span
                    className='update-image-button'
                    onClick={() => setShowUpdateImage(true)}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </span>}
                <NavLink to={`/posts/${post.id}`}>
                    <img className='one-profile-post-img' src={post.postImages[post.previewImgId].url} alt="" />
                </NavLink>
            </div>
            <div className="one-profile-post-content">
                <h2 className="one-post-user">
                    <NavLink
                        onClick={() => setPostType('user posts')}
                        className='profile-pic-link one-post-profile-pic'
                        to={`/profile/${post.postOwner.id}`}
                    >
                        <img className='one-post-profile-pic' src={post.postOwner.profileImgUrl} alt='' />
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink
                        onClick={() => setPostType('user posts')}
                        className='profile-link'
                        to={`/profile/${post.postOwner.id}`}
                    >
                        {post.postOwner.username}
                    </NavLink>
                </h2>
                <div className="one-post-title-and-body">
                    <NavLink className='one-post-title-link' to={`/posts/${post.id}`}>
                        <h3 className="one-post-title">{post.title}</h3>
                    </NavLink>
                </div>
                <h4
                    onClick={async () => {
                        post.usersWhoLiked[currUser.id] ?
                            await dispatch(unlikePost(post.id))
                            && dispatch(getUserPosts(user.id))
                            && dispatch(getUserLikedPosts(user.id))
                            :
                            await dispatch(likePost(post.id))
                            && dispatch(getUserPosts(user.id))
                            && dispatch(getUserLikedPosts(user.id))
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
                        onClick={() => showConfirmDelete(true)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    <div className={`modal container ${updatePost ? "update-post-show" : ""}`}>
                        <UpdatePostForm post={post} setUpdatePost={setUpdatePost} updatePost={updatePost} user={user} />
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
