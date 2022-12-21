import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putComment } from '../../store/comments';
import './CommentForm.css';

const UpdateCommentForm = ({ comment, setUpdateComment }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState(comment.body);

    const handleSubmit = async e => {
        e.preventDefault();

        await dispatch(putComment(body, comment.id));
        setUpdateComment(false);
    }

    return (
        <form className='update-comment-form' onSubmit={handleSubmit}>
            <h3 className='login-title'>Edit Comment</h3>
            <label htmlFor='body-input'></label>
            <textarea
                className='update-comment-textarea'
                required
                name='body-input'
                onChange={e => setBody(e.target.value)}
                value={body}
                placeholder="Update comment"
                type='text'
            />
            <br />
            <div className='comment-form-button-wrapper'>
                <button className='comment-form-button' type='submit'>Edit comment</button>
            </div>
        </form>
    )
}

export default UpdateCommentForm;
