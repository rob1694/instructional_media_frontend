import React from 'react'

function HomePage() {
    return (
        <div className = "container ">
            
            <div className = "row">

                    <div className = "col">-----------Sample Feed-------------(click able leeds to Feed)</div>

                    <p className = "col">At Rumage, whether you'd like to pick up on some new  typing skills, 
                                        learn to bake, add to your building ideas, or teach the are of meditation,
                                         we are here to help get to learning or sharing your experience!
                                        
                                         </p>
             </div>

            <div className = "row">

                <p className = "col" >Our goal is to create an envirnment where all sorts of skills can be 
                recorded and aquired from the same place fro anyones curiousity! 
                </p>

                <a className = "col" href = "http://localhost:3001/users">
                    <img alt = "group learning" 
                    src = "https://images.unsplash.com/photo-1573165067541-4cd6d9837902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80" 
                    border = '3' width="400" height="250"
                    />
            
                </a>
            </div>
        </div>
    )
}

export default HomePage;