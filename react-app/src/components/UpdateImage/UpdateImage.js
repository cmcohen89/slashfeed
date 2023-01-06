import { useState } from "react";
import { useDispatch } from "react-redux";
import { putImg } from "../../store/one_post";
import { getUserPosts } from "../../store/user_posts";
import './UpdateImage.css'

const UpdateImage = ({ setShowUpdateImage, imgId, user }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
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

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form className='update-comment-form' onSubmit={handleSubmit}>
            <h3 className='update-image-title'>Update Image URL</h3>
            <div className='comment-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <input
                className='update-img-input'
                required
                name='url-input'
                onChange={e => setPreviewImgUrl(e.target.value)}
                value={preview_img_url}
                placeholder="Enter new image URL"
                type='text'
            />
            <div className='aws-div3'>
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
            <div className='aws-loading-update-img'>
                {(imageLoading) && <p className='aws-loading-text'>Loading...</p>}
            </div>
            <br />
            <div className='update-img-form-button-wrapper'>
                <button className='update-img-button' type='submit'>Update URL</button>
            </div>
        </form>
    )
}

export default UpdateImage;
