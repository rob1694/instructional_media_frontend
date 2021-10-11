import React from 'react'

function NavBar() {
    return (
        <div>
              <nav>
                <ul className="nav nav-pills flex-column mb-auto">
                     <li className="nav-item">
                        <a className="nav-link text-white" href = "/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href ="/users">Feed </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;