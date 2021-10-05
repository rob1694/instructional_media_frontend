import React from 'react'
import { useState } from 'react'


function CreatePost( { user, posts, setPost } ) {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    function clearForm() {
        setFormData({
            title: "",
            description: ""
        })
    }


    function handleChange(e) {
        const value = e.target.value
        const name = [e.target.name]
        setFormData({
          ...formData,
          [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

    const newPost = {
        user_id: user.id,
        title: formData.title,
        description: formData.description
    }

    function onAddPost(post) {
        setPost([...posts, post]);
      }

    fetch( 'http://localhost:3000/posts', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
        .then((r) => r.json())
        .then(onAddPost)
        .then(clearForm)
    }

    return (
        <div>

            <h1>Create a Post</h1>
                <form onSubmit = {handleSubmit}>
                    <input name = "title" placeholder = "Title" value = {formData.title} onChange = {handleChange}/>
                    <input name = "description" placeholder = "Description" value = {formData.description} onChange = {handleChange}/>
                    <button>Create</button>
                </form>
        </div>
    )
}

export default CreatePost;