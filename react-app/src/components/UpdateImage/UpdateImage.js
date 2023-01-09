import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putImg } from "../../store/one_post";
import { getUserPosts } from "../../store/user_posts";
import './UpdateImage.css'

const UpdateImage = ({ showUpdateImage, setShowUpdateImage, imgId, user }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        let errors = [];
        if (preview_img_url.trim() === '') errors.push('Please enter an image URL!')
        if (errors.length) {
            setErrors(errors);
        } else {
            console.log('hey')
            const data = await dispatch(putImg(imgId, preview_img_url))
            if (data.errors) {
                setErrors(data.errors)
            } else {
                setPreviewImgUrl('');
                setShowUpdateImage(false);
                setErrors([]);
                dispatch(getUserPosts(user.id));
            }
        }
    }

    useEffect(() => {
        if (image) handleUpload();
    }, [image])

    useEffect(() => {
        setErrors([]);
        setImage(null);
        setPreviewImgUrl('')
    }, [showUpdateImage])

    const handleUpload = async () => {
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

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form className='update-comment-form' onSubmit={handleSubmit}>
            <h1 className='update-post-page-title'>Update Post Image</h1>
            <div className='comment-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='aws-input-and-upload'>
                <input
                    className='update-img-input'
                    required
                    name='url-input'
                    onChange={e => setPreviewImgUrl(e.target.value)}
                    value={preview_img_url.slice(0, 62)}
                    placeholder="Enter new image URL"
                    type='text'
                />
                <label className='aws-label-create'><i class="fa-solid fa-upload"></i>
                    <input
                        className="aws-input"
                        type="file"
                        accept="image/*"
                        onChange={updateImage}
                    />
                </label>
                <div className='aws-loading-update-img'>
                    {(imageLoading) && <p className='aws-loading-text'>Loading...</p>}
                </div>
            </div>
            <br />
            <div className='update-img-form-button-wrapper'>
                <button className='update-img-button' type='submit'>Update URL</button>
            </div>
        </form>
    )
}

export default UpdateImage;
