import React from 'react';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import twitterIcon from '../../assets/icons/twitter.png';

function Footer() {

    return (
        <footer className="footer">
            <div className='icons'>
                <a href='https://github.com/seanxmcdaniel' target='blank'>
                    <img src={githubIcon} alt='GitHub icon' className='icon' />
                </a>
                <a href='https://www.linkedin.com/in/seanmcdaniel93/' target='blank'>
                    <img src={linkedinIcon} alt='LinkedIn icon' className='icon' />
                </a>
                <a href='https://twitter.com/seanm_mcdaniel' target='blank'>
                    <img src={twitterIcon} alt='Twitter icon' className='icon' />
                </a>
            </div>
        </footer>
  )
}


export default Footer;