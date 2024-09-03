import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'react-bootstrap'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Email from '@mui/icons-material/Email';

function Footer() {
  
  
  return (
    <div className="footer">
      <LinkedInIcon color="inherit" className='icon'>
      </LinkedInIcon>
      <Email color="inherit" className='icon'></Email>
      <GitHubIcon className='icon'>
      </GitHubIcon>
    </div>
  )
}

export default Footer