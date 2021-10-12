import React from 'react'

function NavBar() {
    return (
        <div className = "wrapper">
              <nav id = "sidebar">
                <ul className="nav nav-pills mb-auto">
                     <li className="nav-item">
                        <a className="nav-link text-white" href = "/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href ="/users">Feed </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href = "/signup">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;