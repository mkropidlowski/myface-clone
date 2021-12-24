import './Board.css'


export default function Board() {
    return (
        <div className="board-container">
            <div className="post">
                <div className="post-nav">
                    <div className="author-info">
                        <p>IMG - Michał Kropidłowski </p>
                        <p>Wczoraj 16:00</p>
                        <p>...</p>
                    </div>
                    <div className="post-data">
                        <p>Inter dobrze wyszedł na sprzedaży Lukaku</p>
                        <div className="photo">
                            MIEJSCE NA ZDJĘCIE
                        </div>
                        <p>(y) likes / 30 komentarzy</p>
                    </div>
                    <div className="like-comment-section">
                        <p>Lubię to!</p>
                        <p>Komentarz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
