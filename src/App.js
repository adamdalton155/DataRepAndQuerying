import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {/*Navbar on top of page with buttons to display different compoments on the one page*/}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              {/* displays home  */}
              <Nav.Link href="/">Home</Nav.Link>
              {/* displays Footer component */}
              <Nav.Link href="/read">Read</Nav.Link> 
              {/* displays Header component */}
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br></br>
          <Switch>
            {/*Link that when pressed displays Content, header or footer exactly as it displays on the page*/}
            <Route path='/' component={Content} exact></Route> 
            <Route path='/read' component={Footer} exact></Route>
            <Route path='/create' component={Header} exact></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
