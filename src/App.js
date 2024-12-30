import logo from './logo.svg';
import Content from './Content';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <head>
        <meta http-equiv="Content-Security-Policy" content="connect-src 'self' https://dummyjson.com"/>
      </head>
      {/* <header className="App-header"> */}
      <div>
        <nav class="navbar">
          <div class="logo">Week4</div>
          <ul class="nav-links">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/content" className="nav-item">Content</Link></li>
            <li><Link to="/register" className="nav-item">Register</Link></li>
            <li><Link to="/login" className="nav-item">Login</Link></li>
            <li><Link to="/Logout" className="nav-item">Logout</Link></li>
          </ul>
        </nav>

        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/content" element={<Content />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      </div>
    </div>
  );
}

export default App;
