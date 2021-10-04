import './App.css';
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';
import FeedPage from './components/FeedPage';

function App() {
  return (
    <div>
      <HomePage/>
      <FeedPage/>
    </div>
  );
}

export default App;
