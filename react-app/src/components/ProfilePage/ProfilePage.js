import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../store/all_users";
import { getChats, postThread } from "../../store/chats";
import { getFollows, postFollow } from "../../store/follows";
import { getUserLikedPosts, getUserPosts } from "../../store/user_posts";
import Chat from "../Chat/Chat";
import UpdateProfileImage from "../UpdateImage/UpdateProfileImage";
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
    const userPosts = useSelector(state => state.userPosts.userPosts);
    const likedPosts = useSelector(state => state.userPosts.userLikedPosts);

    const [viewFollows, setViewFollows] = useState(false);
    const [flag, setFlag] = useState(false);
    const [postType, setPostType] = useState('user posts');
    const [showUpdateProfilePic, setShowUpdateProfilePic] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getFollows(id));
        dispatch(getUserPosts(id));
        dispatch(getUserLikedPosts(id));
    }, [dispatch, id]);

    if (!user || !userFollowers || !userFollows || !userPosts || !likedPosts) return null;

    return (
        <div className="profile-page">
            <div className={`modal container ${showChatModal ? "chat-show" : ""}`}>
                <Chat setShowChatModal={setShowChatModal} targetUserId={id} showChatModal2={showChatModal} />
            </div>
            <div
                className={`overlay ${showChatModal ? "show" : ""}`}
                onClick={() => setShowChatModal(!setShowChatModal)}
            />
            <div className={`modal container ${viewFollows ? "follows-show" : ""}`}>
                <ViewFollows
                    id={id}
                    setViewFollows={setViewFollows}
                    flag={flag}
                    currUser={currUser}
                />
            </div>
            <div className={`modal container ${showUpdateProfilePic ? "update-comment-show" : ""}`}>
                <UpdateProfileImage setShowUpdateProfilePic={setShowUpdateProfilePic} userId={user.id} />
            </div>
            <div
                className={`overlay ${showUpdateProfilePic ? "show" : ""}`}
                onClick={() => setShowUpdateProfilePic(!setShowUpdateProfilePic)}
            />
            <div
                className={`overlay ${viewFollows ? "show" : ""}`}
                onClick={() => setViewFollows(!viewFollows)}
            />
            <div className="profile-header">
                <span className="profile-pic-wrapper">
                    {currUser && currUser.id === user.id && <span
                        className='update-profile-pic-button'
                        onClick={() => setShowUpdateProfilePic(true)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </span>}
                    <img className="profile-pic" src={user.profileImgUrl} alt='' />
                </span>
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
                    {currUser && user && user.id !== currUser.id &&
                        <div className="follow-message-buttons">
                            <span
                                className={`follow-button ${userFollowers[currUser.id] && 'unfollow-button'}`}
                                onClick={async () => {
                                    await dispatch(postFollow(id));
                                    dispatch(getFollows(id));
                                }}
                            >
                                {!userFollowers[currUser.id] ? 'Follow' : 'Unfollow'}
                            </span>
                            <span
                                className="message-button"
                                onClick={async () => {
                                    await dispatch(postThread(user.id));
                                    await dispatch(getChats());
                                    setShowChatModal(true);
                                }}
                            >
                                Message
                            </span>
                        </div>
                    }
                </div>
            </div>
            <div className="profile-post-type">
                <span
                    className={`profile-post-type-button ${postType === 'user posts' && 'profile-type-underline'}`}
                    onClick={() => setPostType('user posts')}>{user.firstName}'s Posts
                </span>
                <span
                    className={`profile-post-type-button ${postType === 'liked posts' && 'profile-type-underline'}`}
                    onClick={() => setPostType('liked posts')}>Posts {user.firstName} Liked
                </span>
            </div>
            <div className="profile-grid-wrapper">
                <div className='profile-grid'>
                    {postType === 'user posts' ?
                        (Object.values(userPosts).length > 0 ?
                            Object.values(userPosts).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => (
                                <div key={post.id}>
                                    <ProfilePost post={post} user={user} setPostType={setPostType} />
                                </div>
                            ))
                            :
                            <h1 className="profile-title">No posts from this user yet...</h1>)
                        :
                        Object.values(likedPosts).length > 0 ?
                            Object.values(likedPosts).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => (
                                <div key={post.id}>
                                    <ProfilePost post={post} user={user} setPostType={setPostType} />
                                </div>
                            ))
                            :
                            <h1 className="profile-title">This user hasn't liked any posts yet!</h1>
                    }
                </div>
            </div>
        </div >
    )
}

export default ProfilePage;
