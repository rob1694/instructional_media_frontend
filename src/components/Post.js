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
                />
        </div>
    )
}

export default Post;