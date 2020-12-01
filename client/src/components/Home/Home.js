import React from 'react';
import './Home.css';
import heroBG from './heroBG.svg';
import search from './search.svg';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="heroPage">
            <div className="container column">
                <p className="littleTitle">Welcome to Bookly</p>
                <h1 className="title">Create your own book list</h1>
                <h1 className="title">and share it with others</h1>
                <form className="searchForm">
                    <img src={search} />
                    <input className="input" type="text" placeholder="Search for a book"/>
                    <button className="btn blue rounded">Search</button>
                </form>
                <p className="createAcc">Don’t have an account yet? <Link to="/signup">Create new account</Link></p>
                <img src={heroBG} />
            </div>
        </div>
    )
}
