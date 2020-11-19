import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Rechercher from './components/Rechercher';
import Commandes from './components/Commandes';
import Compte from './components/Compte';
import Accueil from './components/Accueil';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />    
        <Switch>
          <Route exact path="/" component={Accueil}/>
          <Route exact path= "/rechercher" component={Rechercher}/>
          <Route exact path= "/commandes" component={Commandes}/>
          <Route exact path= "/compte" component={Compte}/>
          <Route exact path="/confirmation" component={Confirmation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
