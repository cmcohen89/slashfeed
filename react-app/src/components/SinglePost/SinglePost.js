import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deletePost } from "../../store/all_posts";
import { getSinglePost } from "../../store/one_post";
import Comments from "../Comments/Comments";
import UpdatePostForm from "../PostForm/UpdatePostForm";
import './SinglePost.css';

const SinglePost = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const singlePost = useSelector(state => state.onePost[id]);

    useEffect(() => {
        dispatch(getSinglePost(id));
    }, [dispatch, id])

    if (!singlePost) return null;

    return (
        <div>
            <h1>Check out this single post, bitch!</h1>
            <h2>{singlePost.postOwner.firstName}'s Post</h2>
            <h3>{singlePost.title}</h3>
            <p>{singlePost.body}</p>
            <img src={singlePost.postImages[singlePost.previewImgId].url} alt="" />
            <h4>{singlePost.likes} likes!</h4>
            <UpdatePostForm post={singlePost} />
            <button onClick={async () => {
                await dispatch(deletePost(singlePost.id))
                history.push('/')
            }}>Delete Post</button>
            <div>
                <Comments postId={singlePost.id} />
            </div>
        </div>
    )
}

export default SinglePost;
