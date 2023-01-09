import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/all_users";
import { putProfilePic } from "../../store/one_post";
import './UpdateImage.css'

const UpdateProfileImage = ({ ShowUpdateProfilePic, setShowUpdateProfilePic, userId }) => {
    const dispatch = useDispatch()
    const [preview_img_url, setPreviewImgUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

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

    useEffect(() => {
        if (image) handleUpload();
    }, [image])

    useEffect(() => {
        setErrors([]);
        setImage(null);
        setPreviewImgUrl('');
    }, [ShowUpdateProfilePic])

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/users/img`, {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            const url = await res.json();
            setPreviewImgUrl(url.url)
            setImageLoading(false);
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
        <form className='update-profile-pic-form' onSubmit={handleSubmit}>
            <h1 className='update-post-page-title'>Update Profile Image</h1>
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
                    value={preview_img_url}
                    placeholder="Enter new image URL"
                    type='text'
                />
                <label className='aws-label-create'><i class="fa-solid fa-upload"></i>
                    <input
                        className="aws-input-update"
                        type="file"
                        accept="image/*"
                        onChange={updateImage}
                    />
                </label>
                <div className='aws-loading-update-img'>
                    {(imageLoading) && <p className='aws-loading-text'>Loading...</p>}
                </div>
            </div>
            <div className='update-img-form-button-wrapper'>
                <button className='update-profile-img-button' type='submit'>Update URL</button>
            </div>
        </form>
    )
}

export default UpdateProfileImage;
