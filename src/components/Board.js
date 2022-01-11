import React from 'react'
import './Board.css'
import Post from './Post'
import { useCollection } from '../hooks/useCollection'

export default function Board() {
    

    const { data, error } = useCollection(
        'post'
    )
    console.log(data)

    return (
        <div className="board-container">
            {/* {error && <p>{error}</p>}
            {data && <Post newPost={data} />} */}
        </div>
        
    )
}
