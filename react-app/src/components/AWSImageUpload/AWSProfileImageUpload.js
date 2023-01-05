import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/all_users";
import './AWSImageUpload.css'

const AWSProfileImageUpload = ({ setShowUpdateProfilePic }) => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
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
            await res.json();
            setShowUpdateProfilePic(false);
            dispatch(getUsers())
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
        <form className='aws-form'>
            <div className="aws-input-div">
                <input
                    className="aws-input"
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />
            </div>
            <div className='aws-loading-div'>
                {!imageLoading ? <span className='aws-submit' onClick={handleSubmit}>Update Image</span> : <p className="aws-loading">Loading...</p>}
            </div>
        </form>
    )
}

export default AWSProfileImageUpload;
