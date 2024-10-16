import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-content">
           

            <h2>Hi,  I'm <strong>Pharaj!</strong></h2>
            <h2>Software Developer </h2>
            <p className='title-desc'>I'm passionate about Software Development , 
            Programming, Data science & Mobile development in general.
           I'm always eager to learn new technologies and create solutions that drive business success for my clients.
           </p>
            <p><a className='cv-link' href="https://drive.google.com/file/d/1KuF2GOoqqpD6W6KGTG-A4NRXp8axkHUR/view?usp=sharing" target="_blank">
                <span>My Resume</span> 
               
            </a></p>
        </div>

        <div className='hero-img'>
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/github.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className='image-container'>
                    <img className='main-image' src="./assets/images/official.jpg" alt=""style={{width:'400px', height:'450px'}} />
                </div>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/linkedin.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className="tech-icon">
                    <img src="./assets/images/facebook.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>

                <div className="tech-icon">
                    <img src="./assets/images/twitter.png" alt="" style={{width:'50px', height:'50px'}} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
