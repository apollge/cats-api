import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Cat from './components/cats/Cat';
import { CatProvider } from './context/cat/CatState';
import Home from './components/pages/Home';
import Navigation from './components/layout/Navigation';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <CatProvider>
      <Router>
        <div className="App">
          <Container>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/cat/:id"
                render={(props) => <Cat {...props} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </CatProvider>
  );
};

export default App;
