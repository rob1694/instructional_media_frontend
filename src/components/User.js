import React from 'react'
import FeedPage from './FeedPage';
import { useEffect, useState } from 'react'
import './User.css'



function User( { users } ) {

  const [ posts, setPost ] = useState([])

    useEffect(() => {
            fetch('http://localhost:3000/posts')
              .then(r => r.json())
              .then((json) => setPost(json))
            }, []);

            const viewUsers = users.map((user) => {
                        return (
                            <div className = "container-row" >                              
                                
                                <h1 className = "col">{user.username} 
                                </h1>
                                
                                <FeedPage
                                key = {user.id}
                                user = {user}
                                posts = {posts}
                                setPost = {setPost}
                                users = {users}
                                />
                            </div>
                         )
                    }
                  )
              
    return (
        <div>
          <div>
            {viewUsers}
          </div>
             
        </div>
    )
}


export default  User;