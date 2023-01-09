import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putSinglePost } from '../../store/one_post';
import { getUserLikedPosts, getUserPosts } from '../../store/user_posts';
import './CreatePostForm.css';

const UpdatePostForm = ({ post, updatePost, setUpdatePost, user }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    let [body, setBody] = useState(post.body);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
        setErrors([])
    }, [updatePost, post.title, post.body])

    const handleSubmit = async e => {
        e.preventDefault();
        let errors = [];
        if (title.trim().length < 2 || title.length > 100) errors.push("Let's keep titles between 2 and 100 characters.");
        if (body.trim().length < 20) errors.push("Tell us more about this post! \n (20 characters minimum)");
        if (body.trim().length > 4999) errors.push("Easy tiger, let's keep it under 5000 characters!");
        if (errors.length) {
            setErrors(errors);
        } else {
            body = body.replace(/\n+/g, '\n').trim()
            const new_post = await dispatch(putSinglePost({ title, body }, post.id));
            if (new_post) {
                await dispatch(getUserPosts(user.id));
                await dispatch(getUserLikedPosts(user.id));
                setUpdatePost(false);
                setErrors([]);
            }
        }
    }

    return (
        <div className='update-post-form'>
            <h2 className='update-post-title'>Update Post</h2>
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
