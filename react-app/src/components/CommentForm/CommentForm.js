import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../store/comments';
import './CommentForm.css';

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        await dispatch(postComment(body, postId));
    }

    return (
        <div>
            <h1>Leave a Comment</h1>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <ul className='product-form-header-errors'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )}
                <label htmlFor='body-input'>Body</label>
                <input
                    required
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Post body"
                    type='text'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;
