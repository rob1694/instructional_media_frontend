import React from 'react'
import UpdatePost from './UpdatePost';
// import ItemsList from './ItemsList';
// import StepsDisplay from './StepsDisplay';
// import VisualsContainer from './VisualsContainer';
import ResourcesDisplay from './ResourcesDisplay';
import { useEffect, useState } from 'react'

function Post( { user, post, posts, setPost } ) {

    const { title, description, imgs, steps, items } = post

    const [ references, setReferences] = useState([])

    

    useEffect(() => {
        fetch('http://localhost:3000/references')
          .then(r => r.json())
          .then((json) => setReferences(json))
        }, []);

    

    function onAddReference(reference) {
        setReferences([...references, reference])
    }

    function deleteReference(referenceID) {
        const newURL = `${'http://localhost:3000/references'}/${referenceID}`;
        const config = { method: "DELETE" };
        fetch(newURL, config)
          .then(r => r.json())
          .then(() => {
            const deleteReferences = references.filter(reference => reference.id !== referenceID);
           setPost(deleteReferences)
          })
      }

    function deletePost(postID) {
        const newURL = `${'http://localhost:3000/posts'}/${postID}`;
        const config = { method: "DELETE" };
        fetch(newURL, config)
          .then(r => r.json())
          .then(() => {
            const deletePosts = posts.filter(post => post.id !== postID);
           setPost(deletePosts)
          })
      }

      function handleDeletePost() {
          deletePost(post.id)
      }
    

    return (
        <div>
                <h2>{title} <button>Edit Post</button></h2>
                <p>Description: {description}</p>

                <UpdatePost 
                user = {user} 
                post = {post} 
                posts = {posts} 
                setPost = {setPost}
                
                />
                {/* <ItemsList items = {items}/>
                <VisualsContainer imgs = {imgs}/>
                <StepsDisplay steps = {steps}/> */}
                <ResourcesDisplay 
                references = {references} 
                post = {post}
                onAddReference = {onAddReference}
                deleteReference = {deleteReference}
                />
                <button onClick = {handleDeletePost}>DELETE Post</button>
        </div>
    )
}

export default Post;