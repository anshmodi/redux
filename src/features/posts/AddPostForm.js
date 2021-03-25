import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import{postAdd} from './postSlice'

export const AddPostForm = () =>{
    const [ title, setTitle ] = useState ('');
    const [ content, setContent ] = useState('');
    
    const dispatch = useDispatch()
    
    const onTitleChange = e => {
        setTitle(e.target.value)
    }
    const onContentChange = e => {
        setContent(e.target.value)
    }

    const onSavePostClicked = ()=>{
            dispatch(
                postAdd({
                    id:nanoid(),
                    title,
                    content
                })    
            )
            setTitle('')
            setContent('')
        
    }


    return(
        <section>
            <h2>Add new Post here</h2>
            <form>
                <label htmlFor ="postTitle">Post Title: </label>
                <input type = "text" id = "postTitle" name = "postTitle" value = {title} onChange = {onTitleChange}></input>
                
                <label htmlFor ="postContent">Post content: </label>
                <input type = "text" id = "postContent" name = "postContent" value = {content} onChange = {onContentChange}></input>

                <button type = "button" onClick = {onSavePostClicked}>Save</button>
            </form>
        </section>
    )
}