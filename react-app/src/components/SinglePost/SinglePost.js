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
        <div className="single-post-page">
            <h3 className="single-post-title">{singlePost.title}</h3>
            <img className="single-post-img" src={singlePost.postImages[singlePost.previewImgId].url} alt="" />
            <div className="single-post-subheader">
                <span>
                    <span className="single-post-user">{singlePost.postOwner.username}&nbsp;&nbsp; / &nbsp;&nbsp;</span>
                    <span className="single-post-date">{singlePost.createdAt}</span>
                </span>
                <span>{singlePost.likes}&nbsp;&nbsp;<i className="fa-solid fa-thumbs-up"></i></span>
            </div>
            <p className="single-post-body">{singlePost.body}</p>
            <Comments postId={singlePost.id} />
            <div>
                <UpdatePostForm post={singlePost} />
                <button onClick={async () => {
                    await dispatch(deletePost(singlePost.id))
                    history.push('/')
                }}>Delete Post</button>
            </div>
        </div>
    )
}

export default SinglePost;
