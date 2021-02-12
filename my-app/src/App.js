import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Jobs from "./components/Jobs";

import {BrowserRouter as Router,Route,Switch,useHistory} from "react-router-dom";
function App() {
  return(
    <div>
     <Router>
        <Switch>
        <Route exact path="/"> <Header/></Route>
        
        </Switch>
      </Router>
    </div>
  )
}


export default App;
