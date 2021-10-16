import React from 'react'
import { useHistory} from 'react-router-dom'
import { useState } from 'react'



 function Login( { setUsers, users} ) {

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
    const specificUser = users.filter(user => user.username === formData.username) 
    
    function handleSubmit(e) {
        e.preventDefault();    

            setUsers(specificUser)
            
            const navigateUsers = () => history.push(`/user`)
            
            navigateUsers()
        }
    

    console.log(specificUser)
    return (
        <div>
            <h1>LogIn</h1>
                <form onSubmit = {handleSubmit}>
                    <div>
                        <label> Enter Username</label>
                    </div>    
                    <input name = "username" placeholder = "Username" value = {formData.username} onChange = {handleChange}/>
                    <button className = "btn btn-primary">Login</button>
                </form> 
        </div>
    )
}

export default Login;