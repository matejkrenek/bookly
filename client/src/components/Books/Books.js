import React from 'react';
import './Books.css';
import bookCover from './book1.png'

export const Books = () => {
    return (
        <div className="booksSection">
            <div className="container column">
                <div className="findingBar">
                    <form className="searchForm">
                        <input className="input" type="text" placeholder="Search for a book"/>
                        <button className="btn blue rounded">Search</button>    
                    </form>
                </div>
                <div className="booksGrid">
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bookCard">
                        <div className="bookCover">
                            <img src={bookCover}/>
                        </div>
                        <div className="bookInfo">
                            <div className="bookMeta">
                                <p className="bookName">The End of Procrastination</p>
                                <p className="authorName">Petr Ludwig</p>
                            </div>
                            <div className="bookRating">
                                <p>4,5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
