import React from 'react'

function NavBar() {
    return (
        <div>
              <nav>
                <ul class="nav nav-tabs">
                     <li class="nav-item">
                        <a class="nav-link active" href = "/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href ="/users">Feed </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;