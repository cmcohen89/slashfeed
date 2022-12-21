import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const UpdatePostForm = ({ post }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        await dispatch(putSinglePost({ title, body }, post.id));
    }

    return (
        <div className='update-post-form'>
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <ul className='product-form-header-errors'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                )}
                <div>
                    <label htmlFor='title-input'>Title</label>
                    <input
                        required
                        className='update-title'
                        name='title-input'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder="Post title"
                        type='text'
                    />
                </div>
                <label htmlFor='body-input'>Body</label>
                <textarea
                    required
                    className='update-body'
                    name='body-input'
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Post body"
                    type='text'
                />
                <div>
                    <button type='submit'>Submit Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePostForm;
