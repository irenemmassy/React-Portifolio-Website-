import React from 'react'
import './Footer.css'



const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
            {year} &copy; Designed & Built by      
            <a href="https://codemarketi.com" target="_blank" rel="noopener noreferrer">
          Codemarketi
        </a> 
            
    </div>
  )
}

export default Footer
