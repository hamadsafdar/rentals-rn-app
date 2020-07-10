import React from 'react';
import { Navigation } from 'react-native-navigation';
import { authRoot, mainRoot } from './src/navigation';
import { Login, Register } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store';

Navigation.registerComponent('rentals.LoginScreen', () => props => (
  <Provider store={store}>
    <Login {...props} />
  </Provider>
));
Navigation.registerComponent('rentals.RegisterScreen', () => props => (
  <Provider store={store}>
    <Register {...props} />
  </Provider>
));

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(authRoot);
});

const isLoggedIn = state => {
  return state.user.isLoggedIn;
};
