import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postSinglePost } from '../../store/one_post';
import './CreatePostForm.css';

const CreatePostForm = ({ setShowCreateModal, showCreateModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        let errors = [];
        if (title.length < 3 || title.length > 100) errors.push("Let's keep titles between 3 and 100 characters.")
        if (body.length < 20) errors.push("Tell us more about this post! \n (20 characters minimum)")
        if (body.length > 4999) errors.push("Easy tiger, let's keep it under 5000 characters!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(postSinglePost({ title, body, preview_img_url }));
            if (data.errors) {
                setErrors(data.errors)
            } else {
                history.push(`/posts/${data.id}`);
                if (setShowCreateModal) setShowCreateModal(false);
                setTitle('');
                setBody('');
                setPreviewImgUrl('');
            }
        }
    }

    useEffect(() => {
        setTitle('');
        setBody('');
        setPreviewImgUrl('');
    }, [showCreateModal])

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/posts/img`, {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            const url = await res.json();
            setImageLoading(false);
            setPreviewImgUrl(url.url)
            // history.push("/images");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
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
                <div className='login-div'>
                    <label className='login-label' htmlFor='title-input'>Title</label>
                    <input
                        className='create-input'
                        required
                        name='title-input'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder="Give your post a short title"
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
                        placeholder="Enter the image URL or upload a pic below"
                        type='text'
                    />
                </div>
                <div className='aws-div'>
                    <label className='aws-label'>
                        <input
                            className="aws-input"
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                        />
                    </label>
                    <span className={`aws-submit2 ${!image && 'upload-disabled'}`} onClick={handleUpload}>Upload</span>
                </div>
                <div className='aws-loading-create'>
                    {(imageLoading) && <p className='aws-loading-text-create'>Loading...</p>}
                </div>
                <div className='login-div'>
                    <label className='login-label' htmlFor='body-input'>Body</label>
                    <textarea
                        className='create-textarea'
                        required
                        name='body-input'
                        onChange={e => setBody(e.target.value)}
                        value={body}
                        placeholder="Tell everyone all about it!"
                        type='text'
                    />
                </div>
                <button className='create-button' type='submit'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
