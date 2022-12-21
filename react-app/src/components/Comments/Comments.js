import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getComments } from '../../store/comments';
import CommentForm from '../CommentForm/CommentForm';
import UpdateCommentForm from '../CommentForm/UpdateCommentForm';
import './Comments.css';

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => Object.values(state.comments));

    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])

    return (
        <div>
            <h4>Check out these comments, bitch!</h4>
            <ul>
                {comments.map(comment => (
                    <div>
                        <span>{comment.createdAt}</span>
                        <li>{comment.commentOwner.firstName}: {comment.body} <UpdateCommentForm comment={comment} /></li>
                        <button onClick={() => { dispatch(deleteComment(comment.id)) }}>Delete Comment</button>
                    </div>
                ))}
            </ul>
            <div>
                <CommentForm postId={postId} />
            </div>
        </div>
    )
}

export default Comments;
