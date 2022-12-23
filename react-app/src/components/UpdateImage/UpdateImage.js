import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../store/all_posts";
import { putImg } from "../../store/one_post";
import './UpdateImage.css'

const UpdateImage = ({ setShowUpdateImage, imgId }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await dispatch(putImg(imgId, preview_img_url))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setPreviewImgUrl('');
            setShowUpdateImage(false);
            setErrors([]);
            dispatch(getPosts());
        }
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
                className='create-input'
                required
                name='url-input'
                onChange={e => setPreviewImgUrl(e.target.value)}
                value={preview_img_url}
                placeholder="Enter new image URL"
                type='text'
            />
            <br />
            <div className='comment-form-button-wrapper'>
                <button className='comment-form-button' type='submit'>Update URL</button>
            </div>
        </form>
    )
}

export default UpdateImage;
