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
        <div className='single-post-comments'>
            <h4 className='comments-title'>Comments</h4>
            <ul>
                {comments.map(comment => (
                    <div className='one-comment'>
                        <h4 className='comment-user'>{comment.commentOwner.username}<span className='comment-timestamp'>&nbsp;&nbsp;/&nbsp;&nbsp;{comment.createdAt}</span></h4>
                        <p className='comment-body'>{comment.body}&nbsp;&nbsp;<button onClick={() => { dispatch(deleteComment(comment.id)) }}>Delete Comment</button></p>
                        <UpdateCommentForm comment={comment} />
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
