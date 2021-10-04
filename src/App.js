import './App.css';
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import User from './components/User';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div>
      <h1>Welcome To Rumage============<div>+ <CreatePost/> +</div> </h1>
      <p>Where you can learn anything!</p>
      <HomePage/>
      <User/>
    </div>
  );
}

export default App;
