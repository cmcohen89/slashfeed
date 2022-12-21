import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../store/comments';
import './CommentForm.css';

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        setBody('');
        await dispatch(postComment(body, postId));
    }

    return (
        <div className='comment-form-div'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <textarea
                    className='comment-form-textarea'
                    required
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Write your comment here!"
                    type='text'
                />
                <div className='comment-form-button-wrapper'>
                    <button className='comment-form-button' type='submit'>Leave comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;
