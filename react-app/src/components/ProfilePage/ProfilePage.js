import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../../store/all_posts";
import { getUsers } from "../../store/all_users";
import { getFollows, postFollow } from "../../store/follows";
import LoginForm from "../auth/LoginForm";
import ViewFollows from "../ViewFollows/ViewFollows";
import './ProfilePage.css'
import ProfilePost from "./ProfilePost";

const ProfilePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user);
    const user = useSelector(state => state.allUsers[id]);
    const userFollowers = useSelector(state => state.follows.followers);
    const userFollows = useSelector(state => state.follows.follows);
    const allPosts = useSelector(state => Object.values(state.allPosts));
    const [viewFollows, setViewFollows] = useState(false);
    const [flag, setFlag] = useState(false);

    let userPosts;
    if (user) userPosts = allPosts.filter(post => user.id === post.postOwner.id);

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
        dispatch(getFollows(id));
    }, [dispatch, id]);

    if (!user || !userFollowers || !userFollows) return null;

    return (
        <div className="profile-page">
            <div className={`modal container ${viewFollows ? "follows-show" : ""}`}>
                <ViewFollows
                    setViewFollows={setViewFollows}
                    followers={Object.values(userFollowers)}
                    following={Object.values(userFollows)}
                    flag={flag}
                />
            </div>
            <div
                className={`overlay ${viewFollows ? "show" : ""}`}
                onClick={() => setViewFollows(!viewFollows)}
            />
            <div className="profile-header">
                <img className="profile-pic" src={user.profileImgUrl} alt='' />
                <div className="profile-header-info">
                    <h1 className="profile-title">{user.username}</h1>
                    <h2 className="profile-title">{user.firstName} {user.lastName}</h2>
                    <div className="profile-stats">
                        <h3 className="profile-stat">{user.postCount} {user.postCount !== 1 ? 'Posts' : 'Post'}</h3>
                        <h3 className="profile-stat">
                            <span className="view-follows" onClick={() => {
                                setViewFollows(true);
                                setFlag(false);
                            }}>
                                {Object.values(userFollowers).length} {Object.values(userFollowers).length !== 1 ? 'Followers' : 'Follower'}
                            </span>
                        </h3>
                        <span className="view-follows" onClick={() => {
                            setViewFollows(true);
                            setFlag(true);
                        }}>
                            <h3 className="profile-stat">{Object.values(userFollows).length} Following</h3>
                        </span>
                    </div>
                    {id != currUser.id && <span
                        className={`follow-button ${userFollowers[currUser.id] && 'unfollow-button'}`}
                        onClick={async () => {
                            await dispatch(postFollow(id));
                            dispatch(getFollows(id))
                        }}
                    >
                        {!userFollowers[currUser.id] ? 'Follow' : 'Unfollow'} {user.username}
                    </span>}
                </div>
            </div>
            <div className="profile-grid-wrapper">
                <div className='profile-grid'>
                    {userPosts.map(post => (
                        <div key={post.id}>
                            <ProfilePost post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ProfilePage;
