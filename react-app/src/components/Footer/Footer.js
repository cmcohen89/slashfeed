import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <span>Developed by Christopher Cohen</span>
                </div>
                <div className='footer-right'>
                    <ul className='nav-logos'>
                        <a
                            className='no-underline'
                            href='https://github.com/cmcohen89/slashfeed'
                            target='_blank'
                            title="Check out this project's repo!"
                            rel="noreferrer"
                        >
                            <li className='nav-logo-link github'>
                                <i className="fa-brands fa-github"></i>
                            </li>
                        </a>
                        <a
                            className='no-underline'
                            href='https://www.linkedin.com/in/christopher-cohen-94ab06236/'
                            target='_blank'
                            title="Contact me on LinkedIn!"
                            rel="noreferrer"
                        >
                            <li className='nav-logo-link linkedin'>
                                <i className="fa-brands fa-linkedin"></i>
                            </li>
                        </a>
                        <a
                            className='no-underline'
                            href='https://open.spotify.com/artist/5geY86ww9VzZY3KocqkS8Q'
                            target='_blank'
                            title="Listen to my music!"
                            rel="noreferrer"
                        >
                            <li className='nav-logo-link spotify'>
                                <i className="fa-brands fa-spotify"></i>
                            </li>
                        </a>
                        <a
                            className='no-underline'
                            href='https://www.instagram.com/pianomancan/'
                            target='_blank'
                            title="Creep on my Instagram!"
                            rel="noreferrer"
                        >
                            <li className='nav-logo-link instagram'>
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                        </a>
                        <a
                            className='no-underline'
                            href='https://www.facebook.com/christopher.cohen.9/'
                            target='_blank'
                            title="For some reason I still haven't deleted my Facebook!"
                            rel="noreferrer"
                        >
                            <li className='nav-logo-link facebook'>
                                <i className="fa-brands fa-facebook"></i>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
