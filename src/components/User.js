import React from 'react'
import FeedPage from './FeedPage';
import { useEffect, useState } from 'react'

function User() {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
            fetch('http://localhost:3000/users')
              .then(r => r.json())
              .then((json) => setUsers(json))
            }, []);

            const viewUsers = users.map((user) => {
                        return (
                            <div>
                                <h2>{user.username}  (Create a post Box)</h2>
                                <FeedPage
                                key = {user.id}
                                
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