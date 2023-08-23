import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Prajwal C</div>
            <div className='n-toggle'><Toggle/></div>
        </div>
        
        
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                <li>
                    <Link activeClass="activeClass" to="Navbar" spy={true} smooth={true}>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="activeClass" to="Skills" spy={true} smooth={true}>
                    Skills
                    </Link>
                    </li>

                    <li>
                    <Link activeClass="activeClass" to="experience" spy={true} smooth={true}>
                        Experience
                        </Link>
                        </li>
                    <li>
                    <Link activeClass="activeClass" to="projects" spy={true} smooth={true}>
                        Projects
                        </Link>
                        </li>
                    <li>
                    <Link activeClass="activeClass" to="testimonial" spy={true} smooth={true}>
                        Testimonials
                        </Link>
                        </li>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar
