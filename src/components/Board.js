import React from 'react'
import './Board.css'
import { useCollection } from '../hooks/useCollection'
import Post from './Post'


export default function Board() {
    
    const { data, error } = useCollection(
        'post', ['createdAt', 'desc']
    )

    return (
        <div className="board-container">
            {error && <p>{error}</p>}
            {data && <Post newPost={data}/>}
        </div>
        
    )
}
