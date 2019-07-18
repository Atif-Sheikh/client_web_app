import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import Home from './components/Home';
import Details from './components/Details';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import './App.css';

class App extends React.Component {
  state = {

  };

  componentDidMount() {
    this.getData();
  };

  getData = async () => {

  };

  render() {
    return (
      <div className="App">
        <Navbar className='navBar' color="light" light expand="md">
          <NavbarBrand href="/">Company</NavbarBrand>
          <Nav className="ml-auto" navbar>
          </Nav>
        </Navbar>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
