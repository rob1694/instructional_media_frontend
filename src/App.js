import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import User from './components/User';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import {useEffect, useState} from 'react'

function App() {

  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(r => r.json())
      .then((json) => setUsers(json))
    }, []);


  return (
    <div className = "container">
      <h1>Welcome To Rumage</h1>
      <p>Simple steps to learn anything!</p>
      <Router>
        <Switch>
            <Route exact path ="/">
              <HomePage/>
            </Route>
          
            <Route path="/users">
              <User/>
             </Route>
            
             <Route path="*">
                <Redirect to="/"/>
              </Route>
        
        </Switch>  
      </Router>
      <footer className = "blockquote-footer">
        <NavBar/>
      </footer>
    </div>
  );
}

export default App;
