import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUp( { onAddUser} ) {

    const [formData, setFormData] = useState({
        username: ""
    })

    const history = useHistory();

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

    const newUser = {
        username: formData.username
    }

    fetch( 'http://localhost:3000/users', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => r.json())
        .then(onAddUser)
        .then(() => history.push(`/users`))
    }


    return (
        <div>
            <h1>Create Username</h1>
                <form onSubmit = {handleSubmit}>
                    <label>Username</label>
                    <input name = "username" placeholder = "Username" value = {formData.username} onChange = {handleChange}/>
                    <button className = "btn btn-primary">Create Username</button>
                </form>    
        </div>
    )
}

export default SignUp;