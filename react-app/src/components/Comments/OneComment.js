import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteComment } from "../../store/comments";
import UpdateCommentForm from "../CommentForm/UpdateCommentForm";

const OneComment = ({ comment }) => {
    const dispatch = useDispatch();
    const [updateComment, setUpdateComment] = useState(false);
    const user = useSelector(state => state.session.user)

    return (
        <div className='one-comment'>
            <h4 className='comment-user'>
                <NavLink className='profile-link' to={`/profile/${comment.commentOwner.id}`}>
                    <img className='one-post-profile-pic' src={comment.commentOwner.profileImgUrl} alt='' />
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink className='comment-profile-link' to={`/profile/${comment.commentOwner.id}`}>
                    {comment.commentOwner.username}
                </NavLink>
                <span className='comment-timestamp'>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    {(new Date(comment.createdAt)).toLocaleTimeString()},
                    {" "}{(new Date(comment.createdAt)).toDateString()}
                </span>
                {user ?
                    user.id === comment.commentOwner.id &&
                    <>
                        <span
                            className='update-comment-button'
                            onClick={() => setUpdateComment(!updateComment)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                        <span
                            className='delete-comment-button'
                            onClick={() => dispatch(deleteComment(comment.id))}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                        <div className={`modal container ${updateComment ? "update-comment-show" : ""}`}>
                            <UpdateCommentForm comment={comment} setUpdateComment={setUpdateComment} />
                        </div>
                        <div
                            className={`overlay ${updateComment ? "show" : ""}`}
                            onClick={() => setUpdateComment(!updateComment)}
                        />
                    </>
                    : ''}
            </h4>
            <p className='comment-body'>{comment.body}</p>
        </div>
    )
}

export default OneComment;
