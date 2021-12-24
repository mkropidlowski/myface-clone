import React from 'react'
import './Board.css'
import happy from '../img/happy.png'
import postImg from '../img/post.JPG'
import likeIcon from '../img/like.png'
import commentIcon from '../img/comment.png'


export default function Board() {
    return (
        <div className="board-container">
            <div className="post">
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">Michał Kropidłowski</span></span>
                        <span className="settings-btn">...</span>
                        </div>
                        
                        <p>Wczoraj 16:00</p>
                    </div>
                    <div className="post-data">
                        <p className="post-title">Inter dobrze wyszedł na sprzedaży Lukaku</p>
                        <div className="photo">
                            <img src={postImg} alt="post" className="post-photo-size"/>
                        </div>
                    <div className="like-section">
                        <p><img src={likeIcon} alt="likes" /> 1500 </p> <p>30 komentarzy</p>
                    </div>
                        
                    </div>
                    <div className="like-comment-section">
                        <p><img src={likeIcon} alt="likes" /> Lubię to!</p>
                        <p><img src={commentIcon} alt="likes" /> Komentarz</p>
                    </div>
                    <>
                        <form className="comment-section">
                            <label><img src={happy} alt="profile" /></label>
                                <label>
                                <input 
                                    type="text"
                                    className="comment-value"
                                    placeholder="Napisz komentarz.."
                                />
                                </label>
                        </form>
                       
                    </>
                </div>

                {/* ----------------------------------------- */}
                <div className="post">
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">Jan Kowalski</span></span>
                        <span className="settings-btn">...</span>
                        </div>
                        
                        <p>Wczoraj 16:00</p>
                    </div>
                    <div className="post-data">
                        <p className="post-title">Inter dobrze wyszedł na sprzedaży Lukaku</p>
                        <div className="photo">
                            <img src={postImg} alt="post" className="post-photo-size"/>
                        </div>
                    <div className="like-section">
                        <p><img src={likeIcon} alt="likes" /> 1500 </p> <p>30 komentarzy</p>
                    </div>
                        
                    </div>
                    <div className="like-comment-section">
                        <p><img src={likeIcon} alt="likes" /> Lubię to!</p>
                        <p><img src={commentIcon} alt="likes" /> Komentarz</p>
                    </div>
                    <>
                        <form className="comment-section">
                            <label><img src={happy} alt="profile" /></label>
                                <label>
                                <input 
                                    type="text"
                                    className="comment-value"
                                    placeholder="Napisz komentarz.."
                                />
                                </label>
                        </form>
                   
                    </>
                </div>
                {/* ----------------------------------------- */}
                <div className="post">
                    <div className="author-info">
                        <div className="header">
                        <span><img src={happy} alt="profile" /><span className="profile-name">Jan Kowalski</span></span>
                        <span className="settings-btn">...</span>
                        </div>
                        
                        <p>Wczoraj 16:00</p>
                    </div>
                    <div className="post-data">
                        <p className="post-title">Inter dobrze wyszedł na sprzedaży Lukaku</p>
                        <div className="photo">
                            <img src={postImg} alt="post" className="post-photo-size"/>
                        </div>
                    <div className="like-section">
                        <p><img src={likeIcon} alt="likes" /> 1500 </p> <p>30 komentarzy</p>
                    </div>
                        
                    </div>
                    <div className="like-comment-section">
                        <p><img src={likeIcon} alt="likes" /> Lubię to!</p>
                        <p><img src={commentIcon} alt="likes" /> Komentarz</p>
                    </div>
                    <>
                        <form className="comment-section">
                            <label><img src={happy} alt="profile" /></label>
                                <label>
                                <input 
                                    type="text"
                                    className="comment-value"
                                    placeholder="Napisz komentarz.."
                                />
                                </label>
                        </form>
                     
                    </>
                </div>
        </div>
        
    )
}
