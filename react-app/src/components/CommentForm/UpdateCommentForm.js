import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putComment } from '../../store/comments';
import './CommentForm.css';

const UpdateCommentForm = ({ comment, setUpdateComment }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState(comment.body);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        let errors = [];
        if (body.length > 4999) errors.push("Easy tiger, let's keep it under 5000 characters!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            await dispatch(putComment(body, comment.id));
            setUpdateComment(false);
            setErrors([]);
        }
    }

    return (
        <form className='update-comment-form' onSubmit={handleSubmit}>
            <h3 className='login-title'>Edit Comment</h3>
            <div className='comment-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
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
