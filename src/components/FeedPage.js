import React from 'react'
import Post from './Post';
import { Switch, Route } from "react-router-dom";
import { useHistory, useRouteMatch } from 'react-router-dom'
import CreatePost from './CreatePost';

function FeedPage( { user, posts, setPost, users } ) {

    const filterCreation = users.filter(userCreating => userCreating.id === user.id)

    const history = useHistory()

    const { path } = useRouteMatch()

    const viewPosts = posts.map((post) => {
        return (
            <Post
            key = {post.id}
            user = {user}
            post = {post}
            posts = {posts}
            setPost = {setPost}
            history = {history}
            />
             )
        }
      )



    return (
        <div className = "media container">
            <h2>LIVE FEED  
                <button className = "col " onClick = {() => history.push(`${path}/${user.id}/create`)}>
                    +
                </button> 
            </h2>

            <Switch>
               <Route path = {`${path}/${user.id}/create`}>
              
                   {filterCreation.map((user) => (
                    <CreatePost
                    key = {user.id}
                    user = {user}
                    posts = {posts}
                    setPost = {setPost}
                    history = {history}
                    />
                    ))
                }          
               </Route>
             </Switch>
                    
            <div className = "media-body">
                {viewPosts}
            </div>
        </div>
    )
}

export default FeedPage;