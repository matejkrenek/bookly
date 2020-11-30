import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="container row">
            <div className="logo__container">
                <Link to="/" className="logo">Bookly</Link>
            </div>
            <div className="navLinks__container flexbox">
                <ul className="navLinks flexbox">
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>
                <ul className="navLinks flexbox">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}
