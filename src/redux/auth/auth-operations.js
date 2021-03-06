import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(({ data }) =>
      dispatch(authActions.registerSuccess(data), token.set(data.token)),
    )
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/login', credentials)
    .then(({ data }) =>
      dispatch(authActions.loginSuccess(data), token.set(data.token)),
    )
    .catch(error => dispatch(authActions.loginError(error.message)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => dispatch(authActions.logoutSuccess()), token.unset())
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default { register, logIn, logOut, getCurrentUser };
