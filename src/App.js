import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
