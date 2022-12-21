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
        setBody('');
        await dispatch(postComment(body, postId));
    }

    return (
        <div>
            <h2>Leave a comment</h2>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <ul className='product-form-header-errors'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )}
                <input
                    required
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Write your comment here!"
                    type='text'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;
