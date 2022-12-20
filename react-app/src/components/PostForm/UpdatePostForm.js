import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postSinglePost, putSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const UpdatePostForm = ({ post }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        await dispatch(putSinglePost({ title, body }, post.id));
    }

    return (
        <div>
            <h1>Update Post</h1>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <ul className='product-form-header-errors'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )}
                <label htmlFor='title-input'>Title</label>
                <input
                    required
                    name='title-input'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder="Post title"
                    type='text'
                />
                <label htmlFor='body-input'>Body</label>
                <input
                    required
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Post body"
                    type='text'
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default UpdatePostForm;
