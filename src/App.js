import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Details/Details';



function App() {
  
  return (
    <div>
     
     <Router>
     

        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
           <Details></Details>
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
