import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';
import ContactsView from '../../views/ContactsView';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
import Container from '../Container';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
