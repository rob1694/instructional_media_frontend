import './App.css';
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import FeedPage from './components/FeedPage';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div>
      <h1>Welcome To Rumage(clickable to home)</h1>
      <p>Where you can learn anything!</p>
      <HomePage/>
      <FeedPage/>
      <CreatePost/>
    </div>
  );
}

export default App;
