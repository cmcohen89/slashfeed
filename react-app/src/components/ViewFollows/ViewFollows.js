import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ViewFollows.css';
import { getFollows, getUserFollows, postFollow } from "../../store/follows";
import { useEffect } from 'react';

const ViewFollows = ({
    id,
    setViewFollows,
    flag,
    currUser
}) => {
    const dispatch = useDispatch();
    const userFollowers = useSelector(state => state.follows.followers);
    const userFollows = useSelector(state => state.follows.follows);
    const currUserFollows = useSelector(state => state.follows.userFollows);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getUserFollows());
        dispatch(getFollows(id));
    }, [dispatch])

    let follows;
    flag ? follows = userFollows : follows = userFollowers;

    if (!userFollowers || !userFollows || (user && !currUserFollows)) return null;

    return (
        <div className='follows-modal'>
            <h1 className='follows-title'>{flag ? 'Following' : 'Followers'}</h1>
            <div className='follows-content'>
                {Object.values(follows).length ?
                    Object.values(follows).map(follow => (
                        <h2 className="follows-user">
                            <div className="follows-user-left">
                                <NavLink onClick={() => setViewFollows(false)}
                                    className='follows-profile-pic-link'
                                    to={`/profile/${follow.id}`}
                                >
                                    <img
                                        className='follows-profile-pic'
                                        src={follow.profileImgUrl}
                                        alt=''
                                    />
                                </NavLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <NavLink
                                    onClick={() => setViewFollows(false)}
                                    className='follows-profile-link'
                                    to={`/profile/${follow.id}`}
                                >
                                    {follow.username}
                                </NavLink>
                            </div>
                            {(currUser && currUser.id !== follow.id) && <span
                                className={`view-follow-button
                            ${currUser && currUserFollows[follow.id] && 'view-unfollow-button'}`
                                }
                                onClick={async () => {
                                    await dispatch(postFollow(follow.id));
                                    dispatch(getUserFollows());
                                    dispatch(getFollows(id));
                                }}
                            >
                                {currUser && !currUserFollows[follow.id] ? 'Follow' : 'Unfollow'}
                            </span>}
                        </h2>
                    ))
                    :
                    <h2 className='no-follows'>
                        {flag ? "You're not following anyone yet!" : "You don't have any followers yet!"}
                    </h2>}
            </div>
        </div>
    )
}

export default ViewFollows;
