import React from 'react'

export const Home = () => {
    return (
        <div className="heroPage">
            <div className="container">
                <p className="littleTitle">Welcome to Bookly</p>
                <h1 className="title">Create your own book list</h1>
                <h1 className="title">and share it with others</h1>
                <form className="searchForm">
                    
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}
