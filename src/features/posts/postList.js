import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () =>{
    const posts = useSelector(state => state.posts)

    const rendredPost = posts.map(posts =>(
        <article key = {posts.id} className = "post-excerpt">
            <h3>{posts.title}</h3>
            <p className = "post-content">{posts.content.substring(0,100)}</p>
        </article>
    ))

    return(
        <section className = "posts-list">
            <h2>Post</h2>
            {rendredPost}
        </section>
    )
}