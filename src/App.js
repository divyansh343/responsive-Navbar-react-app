import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import Login from './screens/Login';

function App() {
  return (

<Router>
  < Navbar />
      <div>
        <Switch>
  
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/Register">
            <RegisterScreen />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

  
  );
}

export default App;
