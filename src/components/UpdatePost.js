import React from 'react'
import { useState } from 'react'

function UpdatePost( { user, post, posts, setPost } ) {

    const [ formData, setFormData ] = useState({
        title: "",
        description: "",
    })

    function clearForm() {
        setFormData({
        title: "",
        description: "",
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

    const updatedPost = {
        user_id: user.id,
        title: formData.title,
        description: formData.description,
    }

    function patchPost(postID) {
        fetch(`${'http://localhost:3000/posts'}/${postID}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedPost),
            })
              .then((r) => r.json())
              .then((updatedPost) => {
                const updatedPosts = posts.map((post) => {
                if (post.id === updatedPost.id) return updatedPost;
                  return post;
                });
                setPost(updatedPosts);
              })
              .then(clearForm)
          }

    function editPost (e) {
        e.preventDefault();

        patchPost(post.id)
    }

    


    return (
        <div>
            <h2>Editing </h2>
            <form onSubmit = {editPost}>
                <div class = "form group">
                    <label>Title: </label>
                    <input name = "title" value = {formData.title} onChange = {handleChange}/>
                </div>
                <div>
                     <label>Description: </label>
                    <input name = "description" value = {formData.description} onChange = {handleChange}/>
                </div>
                <div>
                    <button type = "submit" className = "btn btn-primary">Submit Edit</button>
                </div>
            </form>

        </div>
    )
}

export default UpdatePost;