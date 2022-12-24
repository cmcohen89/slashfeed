import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/all_users";
import { putProfilePic } from "../../store/one_post";
import AWSImageUpload from "../AWSImageUpload/AWSImageUpload";
import AWSProfileImageUpload from "../AWSImageUpload/AWSProfileImageUpload";
import './UpdateImage.css'

const UpdateProfileImage = ({ setShowUpdateProfilePic, userId }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [imgChoice, setImgChoice] = useState('url');
    const [selected, setSelected] = useState(false);

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
        <form className='update-profile-pic-form' onSubmit={handleSubmit}>
            <h3 className='update-image-title'>Choose Profile Image</h3>
            <div className='comment-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='signup-image-choice'>
                <label
                    className={`img-label-choice ${imgChoice === 'url' && 'img-label-choice-selected'}`}
                    onClick={() => setImgChoice('url')}
                >
                    Profile Image URL
                </label>
                <label
                    className={`img-label-choice ${imgChoice === 'upload' && 'img-label-choice-selected'}`}
                    onClick={() => setImgChoice('upload')}
                >
                    Profile Image Upload
                </label>
            </div>
            {imgChoice === 'url' &&
                <>
                    <input
                        className='create-input'
                        required
                        name='url-input'
                        onChange={e => setPreviewImgUrl(e.target.value)}
                        value={preview_img_url}
                        placeholder="Enter new image URL"
                        type='text'
                    />
                    <div className='comment-form-button-wrapper'>
                        <button className='comment-form-button' type='submit'>Update URL</button>
                    </div>
                </>
            }
            {imgChoice === 'upload' && <AWSProfileImageUpload setShowUpdateProfilePic={setShowUpdateProfilePic} />}
            <br />
        </form>
    )
}

export default UpdateProfileImage;
