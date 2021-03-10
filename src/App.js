import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Details/Details';



function App() {
  
  return (
     
     <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
           <Details></Details>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
