import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deletePost } from "../../store/all_posts";
import UpdatePostForm from "../PostForm/UpdatePostForm";

const ProfilePost = ({ post }) => {
    const dispatch = useDispatch();
    const [updatePost, setUpdatePost] = useState(false);

    return (
        <div className='one-profile-post'>
            <div className="one-post-img-container">
                <NavLink to={`/posts/${post.id}`}><img className='one-post-img' src={post.postImages[post.previewImgId].url} alt="" /></NavLink>
            </div>
            <div className="one-post-content">
                <h2 className="one-post-user"><span className="relationship">FRIEND</span>&nbsp;&nbsp; / &nbsp;&nbsp;{post.postOwner.username}</h2>
                <NavLink className='one-post-title-link' to={`/posts/${post.id}`}><h3 className="one-post-title">{post.title}</h3></NavLink>
                <p className="one-post-body">{post.body}</p>
                <h4 className="one-post-likes">{post.likes} <i className="fa-solid fa-thumbs-up"></i></h4>
                <div className="profile-buttons">
                    <span className='update-comment-button' onClick={() => setUpdatePost(!updatePost)}><i className="fa-solid fa-pen-to-square"></i></span>
                    <span className='delete-comment-button' onClick={() => dispatch(deletePost(post.id))}><i className="fa-solid fa-xmark"></i></span>
                    <div className={`modal container ${updatePost ? "update-show" : ""}`}>
                        <UpdatePostForm post={post} setUpdatePost={setUpdatePost} />
                    </div>
                    <div
                        className={`overlay ${updatePost ? "show" : ""}`}
                        onClick={() => setUpdatePost(!updatePost)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfilePost;
