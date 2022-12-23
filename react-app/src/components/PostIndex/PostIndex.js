import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPosts, likePost, unlikePost } from "../../store/all_posts";
import { getUsers } from "../../store/all_users";
import LoginForm from "../auth/LoginForm";
import LoginModal from "../LoginModal";
import OnePost from "./OnePost";
import './PostIndex.css';

const PostIndex = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => Object.values(state.allPosts))
    const user = useSelector(state => state.session.user)
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, [dispatch])


    // allPosts.sort((a, b) => b.likes - a.likes)

    if (!allPosts || !allPosts.length) return null;

    return (
        <div className="all-posts">
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            <div className='featured-posts'>
                <div className='main-post'>
                    <NavLink to={`/posts/${allPosts[0].id}`}>
                        <span className="featured-user-and-title">
                            <h5 className='featured-user'>
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[0].postOwner.id}`}>
                                    <img className='one-post-profile-pic' src={allPosts[0].postOwner.profileImgUrl} alt='' />
                                </NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[0].postOwner.id}`}>
                                    {allPosts[0].postOwner.username}
                                </NavLink>
                            </h5>
                            <h1 className='featured-title'>{allPosts[0].title}</h1>
                        </span>
                        <img
                            className='featured-img'
                            src={allPosts[0].postImages[allPosts[0].previewImgId].url} alt=""
                        />
                    </NavLink>
                    <span onClick={async () => {
                        user ?
                            (
                                allPosts[0].usersWhoLiked[user.id] ?
                                    await dispatch(unlikePost(allPosts[0].id))
                                    && dispatch(getPosts())
                                    :
                                    await dispatch(likePost(allPosts[0].id))
                                    && dispatch(getPosts())
                            )
                            : setShowLoginModal(true)
                    }}
                        className=
                        {
                            `featured-likes
                            ${user && allPosts[0].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >
                        {allPosts[0].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i>
                    </span>
                </div>
                <div className='main-post side-post'>
                    <NavLink to={`/posts/${allPosts[1].id}`}>
                        <span className="side-featured-user-and-title">
                            <h5 className='side-featured-user'>
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[1].postOwner.id}`}>
                                    <img className='one-post-profile-pic' src={allPosts[1].postOwner.profileImgUrl} alt='' />
                                </NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[1].postOwner.id}`}>
                                    {allPosts[1].postOwner.username}
                                </NavLink>
                            </h5>
                            <h1 className='side-featured-title'>{allPosts[1].title}</h1>
                        </span>
                        <img
                            className='side-featured-img'
                            src={allPosts[1].postImages[allPosts[1].previewImgId].url} alt=""
                        />
                    </NavLink>
                    <span onClick={async () => {
                        user ?
                            (
                                allPosts[1].usersWhoLiked[user.id] ?
                                    await dispatch(unlikePost(allPosts[1].id))
                                    && dispatch(getPosts())
                                    :
                                    await dispatch(likePost(allPosts[1].id))
                                    && dispatch(getPosts())
                            )
                            : setShowLoginModal(true)
                    }}
                        className=
                        {
                            `side-featured-likes
                            ${user && allPosts[1].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >{allPosts[1].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i></span>
                </div>
                <div className='main-post side-post bottom'>
                    <NavLink to={`/posts/${allPosts[2].id}`}>
                        <span className="side-featured-user-and-title">
                            <h5 className='side-featured-user'>
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[2].postOwner.id}`}>
                                    <img className='one-post-profile-pic' src={allPosts[2].postOwner.profileImgUrl} alt='' />
                                </NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <NavLink className='featured-profile-link' to={`/profile/${allPosts[2].postOwner.id}`}>
                                    {allPosts[2].postOwner.username}
                                </NavLink>
                            </h5>
                            <h1 className='side-featured-title'>{allPosts[2].title}</h1>
                        </span>
                        <img
                            className='side-featured-img'
                            src={allPosts[2].postImages[allPosts[2].previewImgId].url} alt=""
                        />
                    </NavLink>
                    <span onClick={async () => {
                        user ?
                            (
                                allPosts[2].usersWhoLiked[user.id] ?
                                    await dispatch(unlikePost(allPosts[2].id))
                                    && dispatch(getPosts())
                                    :
                                    await dispatch(likePost(allPosts[2].id))
                                    && dispatch(getPosts())
                            )
                            : setShowLoginModal(true)
                    }}
                        className=
                        {
                            `side-featured-likes
                            ${user && allPosts[2].usersWhoLiked[user.id] ? "one-post-liked" : ""}`
                        }
                    >{allPosts[2].likes}&nbsp;<i className="fa-solid fa-thumbs-up"></i></span>
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
                        <OnePost post={post} setShowLoginModal={setShowLoginModal} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostIndex;
