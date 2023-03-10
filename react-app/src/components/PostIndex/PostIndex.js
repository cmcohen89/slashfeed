import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getPosts, likePost, unlikePost } from "../../store/all_posts";
import { getUsers } from "../../store/all_users";
import { getChats } from "../../store/chats";
import FeaturedPost from "./FeaturedPost";
import OnePost from "./OnePost";
import './PostIndex.css';
import SideFeaturedPost from "./SideFeaturedPost";

const PostIndex = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const allPosts = useSelector(state => Object.values(state.allPosts))
    const topPosts = useSelector(state => Object.values(state.allPosts))
    const user = useSelector(state => state.session.user)
    const [loading, showLoading] = useState(true);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
        if (user) dispatch(getChats());
    }, [dispatch, user])

    setTimeout(() => {
        showLoading(false);
    }, 750)

    topPosts.sort((a, b) => b.likes - a.likes)
    allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    if (!allPosts || allPosts.length < 3) return null;

    if (!user) history.push('/')

    if (loading) return (
        <div className="follow-more-users">
            <h1 className="create-post-page-title">Loading all posts...</h1>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )

    return (
        <div className="all-posts">
            <div className='featured-posts'>
                <div className='main-post'>
                    <NavLink to={`/posts/${topPosts[0].id}`}>
                        <FeaturedPost post={topPosts[0]} />
                    </NavLink>
                    <span onClick={async () => {
                        topPosts[0].usersWhoLiked[user.id] ?
                            await dispatch(unlikePost(topPosts[0].id))
                            && dispatch(getPosts())
                            :
                            await dispatch(likePost(topPosts[0].id))
                            && dispatch(getPosts())
                    }}
                        className=
                        {
                            `featured-likes
                            ${user && topPosts[0].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >
                        {topPosts[0].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i>
                    </span>
                </div>
                <div className='main-post side-post'>
                    <NavLink to={`/posts/${topPosts[1].id}`}>
                        <SideFeaturedPost post={topPosts[1]} />
                    </NavLink>
                    <span onClick={async () => {
                        topPosts[1].usersWhoLiked[user.id] ?
                            await dispatch(unlikePost(topPosts[1].id))
                            && dispatch(getPosts())
                            :
                            await dispatch(likePost(topPosts[1].id))
                            && dispatch(getPosts())
                    }}
                        className=
                        {
                            `side-featured-likes
                            ${user && topPosts[1].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >{topPosts[1].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i></span>
                </div>
                <div className='main-post side-post bottom'>
                    <NavLink to={`/posts/${topPosts[2].id}`}>
                        <SideFeaturedPost post={topPosts[2]} />
                    </NavLink>
                    <span onClick={async () => {
                        topPosts[2].usersWhoLiked[user.id] ?
                            await dispatch(unlikePost(topPosts[2].id))
                            && dispatch(getPosts())
                            :
                            await dispatch(likePost(topPosts[2].id))
                            && dispatch(getPosts())
                    }}
                        className=
                        {
                            `side-featured-likes
                            ${user && topPosts[2].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >{topPosts[2].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i></span>
                </div>
            </div>
            <div className='more'>
                <div className="line" />
                <span className='more_text'>NEWEST POSTS</span>
                <div className="line" />
            </div>
            <div className='lower-index-grid'>
                {allPosts.map(post => (
                    <div key={post.id}>
                        <OnePost post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostIndex;
