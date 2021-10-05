import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import User from './components/User';

function App() {
  return (
    <div>
      <h1>Welcome To Rumage============</h1>
      <p>Where you can learn anything!</p>
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
    </div>
  );
}

export default App;
