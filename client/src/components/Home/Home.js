import React from 'react'
import './Home.css'
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon'

export const Home = () => {
    return (
        <div className="heroPage">
            <div className="container column">
                <p className="littleTitle">Welcome to Bookly</p>
                <h1 className="title">Create your own book list</h1>
                <h1 className="title">and share it with others</h1>
                <form className="searchForm">
                    <SvgIcon className="searchIcon" component={SearchIcon}></SvgIcon>
                    <input className="input" type="text" placeholder="Search for a book"/>
                    <button className="btn blue rounded">Search</button>
                </form>
            </div>
        </div>
    )
}
