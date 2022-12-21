import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const CreatePostForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [preview_img_url, set_preview_img_url] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const newPost = await dispatch(postSinglePost({ title, body, preview_img_url }));
        if (newPost) history.push(`/posts/${newPost.id}`);
    }

    return (
        <div>
            <h1>Create New Post</h1>
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
                <label htmlFor='url-input'>Body</label>
                <input
                    required
                    name='url-input'
                    onChange={e => set_preview_img_url(e.target.value)}
                    value={preview_img_url}
                    placeholder="Post image"
                    type='text'
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
