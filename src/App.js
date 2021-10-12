import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import User from './components/User';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react'

function App() {

  const [ users, setUsers ] = useState([])

    function onAddUser(user) {
      setUsers([...users, user])
    }

    useEffect(() => {
            fetch('http://localhost:3000/users')
              .then(r => r.json())
              .then((json) => setUsers(json))
            }, []);

  return (
    <div className = "flex-row">
      <div className = "d-flex flex-col p-3 text-white bg-dark">
        <NavBar/>
      </div>

      <div className = "container flex-col">
        <h1>Welcome To Rumage</h1>
        <p>Simple steps to learn anything!</p>
        <Router>
          <Switch>
            <Route exact path ="/">
              <HomePage/>
            </Route>
          
            <Route path="/users">
              <User
              users = {users}
              />
             </Route>   

            <Route path = {'/signup'}>               
                    <SignUp
                      onAddUser = {onAddUser}
                    />
            </Route>
                        
             <Route path="*">
                <Redirect to="/"/>
              </Route>
        
         </Switch>  
        </Router>
      </div>
    </div>
  );
}

export default App;
