import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deletePost, getPosts, likePost, unlikePost } from "../../store/all_posts";
import LoginModal from "../LoginModal";
import UpdatePostForm from "../PostForm/UpdatePostForm";
import UpdateImage from "../UpdateImage/UpdateImage";
import ConfirmDelete from "./ConfirmDelete";

const ProfilePost = ({ post, setPostType }) => {
    const dispatch = useDispatch();
    const [updatePost, setUpdatePost] = useState(false);
    const currUser = useSelector(state => state.session.user)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showUpdateImage, setShowUpdateImage] = useState(false);
    const [confirmDelete, showConfirmDelete] = useState(false);

    return (
        <div className='one-profile-post'>
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            <div className={`modal container ${showUpdateImage ? "update-comment-show" : ""}`}>
                <UpdateImage setShowUpdateImage={setShowUpdateImage} imgId={post.previewImgId} />
            </div>
            <div
                className={`overlay ${showUpdateImage ? "show" : ""}`}
                onClick={() => setShowUpdateImage(!setShowUpdateImage)}
            />
            <div className={`modal container ${confirmDelete ? "update-comment-show" : ""}`}>
                <ConfirmDelete showConfirmDelete={showConfirmDelete} postId={post.id} />
            </div>
            <div
                className={`overlay ${confirmDelete ? "show" : ""}`}
                onClick={() => showConfirmDelete(!showConfirmDelete)}
            />
            <div className="one-post-img-container">
                {currUser && currUser.id === post.postOwner.id && <span
                    className='update-image-button'
                    onClick={() => setShowUpdateImage(true)}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </span>}
                <NavLink to={`/posts/${post.id}`}>
                    <img className='one-post-img' src={post.postImages[post.previewImgId].url} alt="" />
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
                        currUser ?
                            (
                                post.usersWhoLiked[currUser.id] ?
                                    await dispatch(unlikePost(post.id))
                                    && dispatch(getPosts())
                                    :
                                    await dispatch(likePost(post.id))
                                    && dispatch(getPosts())
                            )
                            : setShowLoginModal(true)
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
