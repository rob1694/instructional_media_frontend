import React from 'react'
import Post from './Post';
import { useEffect, useState } from 'react'


function FeedPage(  ) {

    const [ posts, setPost ] = useState([])

    useEffect(() => {
            fetch('http://localhost:3000/posts')
              .then(r => r.json())
              .then((json) => setPost(json))
            }, []);


    const viewPosts = posts.map((post) => {
        return (
            <Post
            key = {post.id}
            post = {post}
            />
             )
        }
      )



    return (
        <div>
            <h1>LIVE FEED</h1>
            <div>
                {viewPosts}
            </div>
        </div>
    )
}

export default FeedPage;