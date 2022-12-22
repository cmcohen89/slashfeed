import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/comments";
import UpdateCommentForm from "../CommentForm/UpdateCommentForm";

const OneComment = ({ comment }) => {
    const dispatch = useDispatch();
    const [updateComment, setUpdateComment] = useState(false);
    const user = useSelector(state => state.session.user)

    return (
        <div className='one-comment'>
            <h4 className='comment-user'>
                {comment.commentOwner.username}
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
                        <div className={`modal container ${updateComment ? "update-show" : ""}`}>
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
