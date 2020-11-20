import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Commandes from './components/Commandes';

import Accueil from './components/Accueil';
import CarouselFood from './components/CarouselFood';
import CarouselWeapon from './components/CarouselWeapon';
import Meals from './components/Meals';
import Auberges from './components/Auberges';
import ListOfMeals from './components/ListOfMeals';
import Armor from './components/Armor';
import Shields from './components/Shields';
import HorseAccessories from './components/HorseAccessories';
import Weapons from './components/Weapons.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/food' component={CarouselFood} />
          <Route exact path='/weapon' component={CarouselWeapon} />

          <Route exact path='/commandes' component={Commandes} />

          <Route exact path='/meals' component={Meals} />
          <Route exact path='/auberges' component={Auberges} />
          <Route exact path='/listOfMeals' component={ListOfMeals} />

          <Route exact path='/weapons' component={Weapons} />
          <Route exact path='/armors' component={Armor} />
          <Route exact path='/shields' component={Shields} />
          <Route exact path='/horse' component={HorseAccessories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
