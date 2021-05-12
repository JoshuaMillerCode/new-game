import './App.css';
import Intro from './components/Intro'
import Game from './components/Game'
import Wires from './components/Wires'
import Move from './components/Move'
import Simon from './components/Simon'
import Numbers from './components/Numbers'
import Trivia from './components/Trivia'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const routes = [
  {
    Component: Game,
    key: 'Game',
    path: '/game'
  },
  {
    Component: Wires,
    key: 'Wires',
    path: '/wires'
  },
  {
    Component: Move,
    key: 'Move',
    path: '/move'
  },
  {
    Component: Simon,
    key: 'Simon',
    path: '/simon'
  },
  {
    Component: Numbers,
    key: 'Number',
    path: '/number'
  },
  {
    Component: Trivia,
    key: 'Trivia ',
    path: '/trivia'
  },
  {
    Component: Intro,
    key: 'Intro',
    path: '/'
  }
]


function App() {
  return (
      <Router>
        <Switch>
          {routes.map(({ Component, key, path}) => {
            return( 
              <Route 
                  key={key}
                  path={path}
                  component={() => <Component page={key} />}
              />
            )
          })}
        </Switch>
      </Router>
  );
}

export default App;
