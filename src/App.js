import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import UserProfile from './components/UserProfile';

function App() {

  const { authIsReady, user } = useAuthContext()


  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to="/login" />}
            {user && <Home /> }
          </Route>
          <Route exact path="/signup">
            {user && <Redirect to="/" />}
            {!user && <Signup /> }
          </Route>
          <Route exact path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>
          <Route exact path="/userprofile">
            {user && <UserProfile />}
            {!user && <UserProfile />}
          
          </Route>
        </Switch>
        </BrowserRouter>
     
      )}
          
    </div>
  );
}

export default App;

