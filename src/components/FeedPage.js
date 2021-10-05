import React from 'react'
import Post from './Post';


function FeedPage( { user, posts, setPost } ) {


    const viewPosts = posts.map((post) => {
        return (
            <Post
            key = {post.id}
            user = {user}
            post = {post}
            posts = {posts}
            setPost = {setPost}
            />
             )
        }
      )



    return (
        <div>
            <h2>LIVE FEED</h2>
            <div>
                {viewPosts}
            </div>
        </div>
    )
}

export default FeedPage;