import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Dropdown } from '../Dropdown/Dropdown'
import { motion } from 'framer-motion'

export const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const openDropdown = () => setDropdown(true)
    const closeDropdown = () => setDropdown(false)
    

    return (
    <motion.div className={dropdown ? 'navbar active' : 'navbar'}>
        <div className="container row">
            <div className="logo__container">
                <Link to="/" className="logo">Bookly</Link>
            </div>
            <div className="navLinks__container flexbox">
                <ul className="navLinks flexbox">
                    <motion.li whileHover={{
                            x: 0
                        }} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}><Link to="/books">Books</Link>{dropdown && <Dropdown/>}</motion.li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>
                <ul className="navLinks flexbox">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </div>
    </motion.div>
    )
}
