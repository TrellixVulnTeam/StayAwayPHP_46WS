import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rechercher from './components/Rechercher';
import Commandes from './components/Commandes';
import Compte from './components/Compte';
import Accueil from './components/Accueil';
import CarouselFood from './components/CarouselFood';
import CarouselWeapon from './components/CarouselWeapon';
import Weapons from './components/Weapons';
import Armor from './components/Armor';
import Shields from './components/Shields';
import HorseAccessories from './components/HorseAccessories';
import OrderConfirmation from './components/OrderConfirmation';
import Meals from './components/Meals';
import Auberges from './components/Auberges';
import ListOfMeals from './components/ListOfMeals';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/food' component={CarouselFood} />
          <Route exact path='/carouselweapon' component={CarouselWeapon} />
          <Route exact path='/rechercher' component={Rechercher} />
          <Route exact path='/commandes' component={Commandes} />
          <Route exact path='/compte' component={Compte} />
          <Route exact path='/weapons' component={Weapons} />
          <Route exact path='/armors' component={Armor} />
          <Route exact path='/shields' component={Shields} />
          <Route exact path='/horse' component={HorseAccessories} />
          <Route exact path='/order' component={OrderConfirmation} />
          <Route exact path='/meals' component={Meals} />
          <Route exact path='/auberges' component={Auberges} />
          <Route exact path='/listOfMeals' component={ListOfMeals} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
