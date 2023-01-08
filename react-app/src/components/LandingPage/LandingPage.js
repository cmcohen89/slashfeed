import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import LoginFormLanding from '../auth/LoginFormLanding';
import SignUpFormLanding from '../auth/SignUpFormLanding';
import './LandingPage.css'

const LandingPage = () => {
    const [form, setForm] = useState('login');
    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className="landing-page">
            <div className='landing-page-content'>
                <div className='landing-page-forms-wrapper'>
                    {user ?
                        <div className='landing-user'>
                            <div className='landing-user-logo'>
                                <img src="https://i.imgur.com/i9QyYGZ.png" />
                            </div>
                            <div>
                                <img className='landing-user-pic' src={user.profileImgUrl} />
                            </div>
                            <span className='landing-user-continue' onClick={() => history.push('/home')}>
                                Continue as {user.username}
                            </span>
                            <span className='landing-user-switch'>
                                Not {user.username}?&nbsp;
                                <span className='landing-switch' onClick={async () => await dispatch(logout())}>
                                    Switch accounts
                                </span>
                            </span>
                        </div>
                        :
                        <div className='landing-page-forms'>
                            {
                                form === 'login' ?
                                    <LoginFormLanding setForm={setForm} /> :
                                    <SignUpFormLanding setForm={setForm} />
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
