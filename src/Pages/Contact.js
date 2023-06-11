import React from 'react'
import './Stylesheets/Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('gmail', 'personal_website_temp', e.target, 'MYI-Frv4UhKJuvMa7')
      .then((result) => {
         console.log(result.text);
         window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contact' id='Contact-Page'>
      <h1>Contact</h1>
      “If I had asked people what they wanted, they would have said faster horses. ”
       <br /> - Henry Ford
      <hr />
      <div className='contact-div' >
        <div className='contact-form'>
          <form onSubmit={sendEmail}>
            <input type="text" name='name' placeholder="Enter Your Name"/> <br />
            <input type="email" name='email' placeholder="Enter Email"/> <br />
            <input type='text' name='message' placeholder="Enter Message"/> <br />
            <input type="submit" className='contact-form-submit'/>
          </form>
        </div>
        <div className='contact-information'>
          <a href="https://www.linkedin.com/in/akshat-gadodia" target="_blank" rel='noopener noreferrer'><LinkedInIcon fontSize="large" style={{color:"white"}}/> </a>
          <a href="https://www.github.com/akshatgadodia/" target="_blank" rel='noopener noreferrer'><GitHubIcon fontSize="large" style={{color:"white"}}/> </a>
          <a href="https://www.instagram.com/akshat_gadodia/" target="_blank" rel='noopener noreferrer'><InstagramIcon fontSize="large" style={{color:"white"}}/> </a>
          <a href="https://www.facebook.com/akshat.gadodia" target="_blank" rel='noopener noreferrer'><FacebookIcon fontSize="large" style={{color:"white"}}/></a>
          <a href="mailto:akshatgadodia@gmail.com"><AlternateEmailIcon fontSize="large" style={{color:"white"}}/> </a><br />
          <br /><br />
          Email :
          <h4>akshatgadodia@gmail.com</h4><br />
          Phone No. :
          <h4>+91-7737152961</h4><br />
        </div>
      </div>
    </div>
  )
}

export default Contact