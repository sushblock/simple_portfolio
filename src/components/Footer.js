import React from 'react'
import '../styles/Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/sushilkr23' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
        </div>
        <p>&copy;2023 Sushil Portfolio Website</p>
    </div>
  )
}

export default Footer