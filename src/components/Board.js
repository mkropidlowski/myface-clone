import React from 'react'
import './Board.css'
import { useCollection } from '../hooks/useCollection'
import Post from './Post'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Board() {
    
    const { user } = useAuthContext()
    const { data, error } = useCollection('post')

    return (
        <div className="board-container">
            {error && <p>{error}</p>}
            {data && <Post newPost={data}/>}
        </div>
        
    )
}
