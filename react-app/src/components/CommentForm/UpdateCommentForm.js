import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putComment } from '../../store/comments';
import './CommentForm.css';

const UpdateCommentForm = ({ comment }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState(comment.body);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        await dispatch(putComment(body, comment.id));
    }

    return (
        <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <ul className='product-form-header-errors'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            )}
            <label htmlFor='body-input'>Update: </label>
            <input
                required
                name='body-input'
                onChange={e => setBody(e.target.value)}
                value={body}
                placeholder="Update comment"
                type='text'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UpdateCommentForm;
