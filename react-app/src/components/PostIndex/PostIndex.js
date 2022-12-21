import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPosts } from "../../store/all_posts";
import OnePost from "./OnePost";
import './PostIndex.css';

const PostIndex = () => {
    const dispatch = useDispatch();
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        (async function fetchProducts() {
            const allPosts = await dispatch(getPosts());
            const shuffled = allPosts.Posts.sort(() => 0.5 - Math.random());
            setAllPosts(shuffled);
        })()
    }, [dispatch])

    if (!allPosts || !allPosts.length) return null;

    return (
        <div className="all-posts">
            <div className='featured-posts'>
                <div className='main-post'>
                    <NavLink to={`/posts/${allPosts[0].id}`}>
                        <span className="featured-user-and-title">
                            <h5 className='featured-user'>{allPosts[0].postOwner.username}</h5>
                            <h1 className='featured-title'>{allPosts[0].title}</h1>
                        </span>
                        <img className='featured-img' src={allPosts[0].postImages[allPosts[0].previewImgId].url} alt="" />
                    </NavLink>
                </div>
                <div className='main-post'>
                    <NavLink to={`/posts/${allPosts[1].id}`}>
                        <span className="side-featured-user-and-title">
                            <h5 className='side-featured-user'>{allPosts[1].postOwner.username}</h5>
                            <h1 className='side-featured-title'>{allPosts[1].title}</h1>
                        </span>
                        <img className='side-featured-img' src={allPosts[1].postImages[allPosts[1].previewImgId].url} alt="" />
                    </NavLink>
                </div>
                <div className='main-post bottom'>
                    <NavLink to={`/posts/${allPosts[2].id}`}>
                        <span className="side-featured-user-and-title">
                            <h5 className='side-featured-user'>{allPosts[2].postOwner.username}</h5>
                            <h1 className='side-featured-title'>{allPosts[2].title}</h1>
                        </span>
                        <img className='side-featured-img' src={allPosts[2].postImages[allPosts[2].previewImgId].url} alt="" />
                    </NavLink>
                </div>
            </div>
            <div className='more'>
                <div className="line" />
                <span className='more_text'>MORE FROM YOUR FRIENDS</span>
                <div className="line" />
            </div>
            <div className='lower-index-grid'>
                {allPosts.slice(3).map(post => (
                    <div key={post.id}>
                        <OnePost post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostIndex;
