import React from 'react';
import { Navigation } from 'react-native-navigation';
import { authRoot, mainRoot } from './src/navigation';
import { Login, Register, Explore, Inbox } from './src/screens';
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
Navigation.registerComponent('rentals.ExploreScreen', () => props => (
  <Provider store={store}>
    <Explore {...props} />
  </Provider>
));
Navigation.registerComponent('rentals.InboxScreen', () => props => (
  <Provider store={store}>
    <Inbox {...props} />
  </Provider>
));

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : authRoot);
});

const isLoggedIn = state => {
  return false;
};
