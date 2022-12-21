import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comments';
import CommentForm from '../CommentForm/CommentForm';
import './Comments.css';
import OneComment from './OneComment';

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const comments = useSelector(state => Object.values(state.comments));

    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])

    return (
        <div className='single-post-comments'>
            <div className='comments-content'>
                {comments.length === 0 && <span>No comments yet! Be the first to leave a comment!</span>}
                <ul>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <OneComment comment={comment} />
                        </div>
                    ))}
                </ul>
            </div>
            {user && <CommentForm postId={postId} />}
        </div>
    )
}

export default Comments;
