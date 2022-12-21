import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../store/all_posts';
import { putSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const UpdatePostForm = ({ post, setUpdatePost }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        let errors = [];
        if (title.length < 2 || title.length > 50) errors.push("Let's keep titles between 2 and 50 characters.")
        if (body.length < 20) errors.push("Tell us more about this post!")
        if (errors.length) {
            setErrors(errors);
        } else {
            const new_post = await dispatch(putSinglePost({ title, body }, post.id));
            if (new_post) {
                await dispatch(getPosts());
                setUpdatePost(false);
            }
        }
    }

    return (
        <div className='create-form'>
            <h2 className='login-title'>Update Post</h2>
            <form onSubmit={handleSubmit}>
                <div className='update-errors'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='login-div'>
                    <label className='login-label' htmlFor='title-input'>Title</label>
                    <input
                        required
                        className='create-input'
                        name='title-input'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder="Post title"
                        type='text'
                    />
                </div>
                <div className='login-div'>
                    <label className='login-label' htmlFor='body-input'>Body</label>
                    <textarea
                        required
                        className='create-textarea'
                        name='body-input'
                        onChange={e => setBody(e.target.value)}
                        value={body}
                        placeholder="Post body"
                        type='text'
                    />
                </div>
                <button className='create-button' type='submit'>Submit Update</button>
            </form>
        </div>
    )
}

export default UpdatePostForm;
