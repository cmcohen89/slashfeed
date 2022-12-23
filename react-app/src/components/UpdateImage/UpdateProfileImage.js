import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/all_users";
import { putProfilePic } from "../../store/one_post";
import './UpdateImage.css'

const UpdateProfileImage = ({ setShowUpdateProfilePic, userId }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await dispatch(putProfilePic(userId, preview_img_url))
        if (data.errors) {
            setErrors(data.errors)
        } else {
            setPreviewImgUrl('');
            setShowUpdateProfilePic(false);
            setErrors([]);
            dispatch(getUsers());
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

export default UpdateProfileImage;
