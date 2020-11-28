import React from 'react'

export const Navbar = () => {
    return (
    <div class="navbar">
        <div class="container row">
            <div class="logo__container">
                <a href="/" class="logo">Bookly</a>
            </div>
            <div class="navLinks__container flexbox">
                <ul class="navLinks flexbox">
                    <li><a href="/books">Books</a></li>
                    <li><a href="/authors">Authors</a></li>
                    <li><a href="/feedback">Feedback</a></li>
                </ul>
                <ul class="navLinks flexbox">
                    <li><a href="/login">Log in</a></li>
                    <li><a href="/signup">Sign up</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}
