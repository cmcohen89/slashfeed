import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/all_posts";
import './ProfilePage.css'
import ProfilePost from "./ProfilePost";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const allPosts = useSelector(state => Object.values(state.allPosts));
    const userPosts = allPosts.filter(post => user.id === post.postOwner.id);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="profile-page">
            <h1 className="profile-title">{user.firstName}'s Posts</h1>
            <div className="profile-grid-wrapper">
                <div className='profile-grid'>
                    {userPosts.map(post => (
                        <div key={post.id}>
                            <ProfilePost post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
