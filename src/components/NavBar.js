import React from 'react'

function NavBar() {
    return (
        
        <div className = "wrapper row">
                <div className = "col-2">
                        <img alt = "logo" src = "https://katonahpresbyterian.org/wp-content/uploads/2019/04/rummage19.jpg"
                        width = "50" height = "50"/>
                </div>

                <div className = "col-7">
                    <a className = "text-white" href = "/">
                        <h1 className = "row">Welcome To Rumage</h1>
                        <p className = "row">  Simple steps to learn anything, anywhere, anytime!</p>
                    </a>
                </div>
            
                    <nav id = "sidebar">
                        <ul className="nav nav-pills mb-auto">
                            
                            <li className="nav-item">
                                <a className="nav-link text-white" href = "/">Home</a>
                            </li>
                    
                            <li className="nav-item">
                                <a className="nav-link text-white" href = "/signup">Sign Up</a>
                            </li>
                        
                            <li className="nav-item">
                                <a className="nav-link text-white" href = "/login">Login</a>
                            </li>
                        </ul>
                    </nav>
        </div>
    )
}


export default NavBar;