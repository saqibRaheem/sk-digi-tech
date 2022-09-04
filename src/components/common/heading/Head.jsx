import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa';

export default function Head() {
  return (
    <>
        <section className="head">
            <div className="container flexSB">
            
                <div className="logo">
                    <h1>SK-DIGI-TECH</h1>
                    <span>THE DIGITAL EDUCATION HUB</span>
                </div>
                <div className="social">
                <FaFacebookF className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaLinkedinIn className='icon'/>
                
                   
                </div>
            </div>
        </section>
    </>
  )
}
