import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '../AppBar';
import Container from '../Container';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import routes from '../../routes';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-page" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "phonebook" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-page" */),
);

class App extends Component {
  static propTypes = {
    onGetCurrentUser: PropTypes.func,
  };
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

export default App;
