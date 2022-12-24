import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './AWSImageUpload.css'

const AWSImageUpload = ({ postId }) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/posts/${postId}/img`, {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            setImageLoaded(true);
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
        <form className='aws-form' onSubmit={handleSubmit}>
            <div className="aws-input-div">
                <input
                    className="aws-input"
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />
                {(imageLoading) && <p>Loading...</p>}
            </div>
            <div>
                <button className='aws-submit' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AWSImageUpload;
