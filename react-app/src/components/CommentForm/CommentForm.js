import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/comments';
import './CommentForm.css';

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);

    const handleSubmit = async e => {
        e.preventDefault();
        let errors = [];
        if (body.trim() === '') errors.push("You can't submit an empty message!")
        if (body.length > 4999) errors.push("Easy tiger, let's keep it under 5000 characters!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            await dispatch(postComment(body.replace(/\n+/g, '\n').trim(), postId));
            setErrors([]);
            setBody('');
        }
    }

    return (
        <div className='comment-form-div'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <div className='comment-errors'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <textarea
                    className='comment-form-textarea'
                    required
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder={user ? "Write your comment here!" : "Log in to leave a comment!"}
                    type='text'
                    disabled={user ? false : true}
                />
                <div className='comment-form-button-wrapper'>
                    <button className={`comment-form-button ${(!user || !body.length) && 'comment-form-button-disabled'}`} type='submit'>Leave comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;
