import { NavLink } from "react-router-dom";

const OnePost = ({ post }) => {
    return (
        <div>
            <h2>{post.postOwner.firstName}'s Post</h2>
            <NavLink to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <img src={post.postImages[post.previewImgId].url} alt="" />
            </NavLink>
            <p>{post.body}</p>
            <h4>{post.likes} likes!</h4>
        </div>
    )
}

export default OnePost;
