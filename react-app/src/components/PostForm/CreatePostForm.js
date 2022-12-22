import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const CreatePostForm = ({ setShowCreateModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        let errors = [];
        if (title.length < 3 || title.length > 40) errors.push("Let's keep titles between 3 and 40 characters.")
        if (body.length < 20) errors.push("Tell us more about this post!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(postSinglePost({ title, body, preview_img_url }));
            if (data.errors) {
                setErrors(data.errors)
            } else {
                history.push(`/posts/${data.id}`);
                setShowCreateModal(false);
                setTitle('');
                setBody('');
                setPreviewImgUrl('');
            }
        }
    }

    return (
        <div>
            <form className='create-form' onSubmit={handleSubmit}>
                <h1 className='login-title'>Create New Post</h1>
                <div className='login-errors'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='horizontal-create'>
                    <div className='login-div'>
                        <label className='login-label' htmlFor='title-input'>Title</label>
                        <input
                            className='create-input'
                            required
                            name='title-input'
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            placeholder="Post title"
                            type='text'
                        />
                    </div>
                    <div className='login-div'>
                        <label className='login-label' htmlFor='url-input'>Image URL</label>
                        <input
                            className='create-input'
                            required
                            name='url-input'
                            onChange={e => setPreviewImgUrl(e.target.value)}
                            value={preview_img_url}
                            placeholder="Post image"
                            type='text'
                        />
                    </div>
                </div>
                <div className='login-div'>
                    <label className='login-label' htmlFor='body-input'>Body</label>
                    <textarea
                        className='create-textarea'
                        required
                        name='body-input'
                        onChange={e => setBody(e.target.value)}
                        value={body}
                        placeholder="Post body"
                        type='text'
                    />
                </div>
                <button className='create-button' type='submit'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
