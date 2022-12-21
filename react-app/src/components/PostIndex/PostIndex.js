import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/all_posts";
import CreatePostForm from "../PostForm/CreatePostForm";
import OnePost from "./OnePost";
import './PostIndex.css';

const PostIndex = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => Object.values(state.allPosts))

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (!allPosts) return null;

    return (
        <>
            <h1>Check out these posts, bitch!</h1>
            <div><CreatePostForm /></div>
            {allPosts.map(post => (
                <div key={post.id}>
                    <OnePost post={post} />
                </div>
            ))}
        </>
    )
}

export default PostIndex;
