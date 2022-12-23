import { NavLink } from 'react-router-dom';
import './ViewFollows.css';

const ViewFollows = ({ setViewFollows, followers, following, flag }) => {
    let follows;
    flag ? follows = following : follows = followers;
    return (
        <div className='follows-modal'>
            <h1 className='follows-title'>{flag ? 'Following' : 'Followers'}</h1>
            <div className='follows-content'>
                {follows.map(follow => (
                    <h2 className="follows-user">
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
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default ViewFollows;
