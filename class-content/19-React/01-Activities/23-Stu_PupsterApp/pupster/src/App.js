import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Discover from './pages/discover'
import Search from './pages/search'

function App() {
  return (

    <Router>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/discover">About</Link>
          </li>
          <li>
            <Link to="/search">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
