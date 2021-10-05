import React from 'react'
import FeedPage from './FeedPage';
import { useEffect, useState } from 'react'
import CreatePost from './CreatePost';

function User() {

    const [ users, setUsers ] = useState([])

    const [ posts, setPost ] = useState([])

    

    useEffect(() => {
            fetch('http://localhost:3000/users')
              .then(r => r.json())
              .then((json) => setUsers(json))
            }, []);

    useEffect(() => {
            fetch('http://localhost:3000/posts')
              .then(r => r.json())
              .then((json) => setPost(json))
            }, []);

            const viewUsers = users.map((user) => {
                        return (
                            <div>
                                <h1>{user.username}  <button>new post</button></h1>
                                <CreatePost
                                user = {user}
                                posts = {posts}
                                setPost = {setPost}
                                />
                                <FeedPage
                                key = {user.id}
                                posts = {posts}
                                setPost = {setPost}
                                />
                            </div>
                         )
                    }
                  )
    return (
        <div>
            {viewUsers}

        </div>
    )
}


export default  User;