import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';


const App: FunctionComponent = () => {

  return (
    <Router>
      <div>
        {/* barre de nav */}
        <nav>
          <div className='nav-wrapper teal'>
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
      </div>
      {/* gestion des routes */}
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <Route exact path="/pokemons/add" component={PokemonAdd} />

        <Route path="/pokemons/:id" component={PokemonDetail} />

        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App;