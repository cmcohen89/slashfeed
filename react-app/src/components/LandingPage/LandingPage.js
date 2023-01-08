import { useState } from 'react';
import LoginFormLanding from '../auth/LoginFormLanding';
import SignUpFormLanding from '../auth/SignUpFormLanding';
import './LandingPage.css'

const LandingPage = () => {
    const [form, setForm] = useState('login');

    return (
        <div className="landing-page">
            <div className='landing-page-content'>
                <div className='landing-page-forms-wrapper'>
                    <div className='landing-page-forms'>
                        {
                            form === 'login' ?
                                <LoginFormLanding setForm={setForm} /> :
                                <SignUpFormLanding setForm={setForm} />
                        }
                    </div>
                    {/* <div>
                        {
                            form === 'login' ?
                                <p className='landing-lower-text'>
                                    Don't have an account?&nbsp;&nbsp;
                                    <span
                                        className='sign-up-landing-link'
                                        onClick={() => setForm('signup')}
                                    >
                                        Sign Up
                                    </span>
                                </p> :
                                <p className='landing-lower-text'>
                                    Already have an account?&nbsp;&nbsp;
                                    <span
                                        className='sign-up-landing-link'
                                        onClick={() => setForm('login')}
                                    >
                                        Login
                                    </span>
                                </p>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
