import React from 'react';
import { Text } from 'native-base';

import AppNavigator from './containers/AppNavigator';
import AuthNavigator from './containers/AuthNavigator';
import firebase from 'react-native-firebase';

class App extends React.Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
      error: null,
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    if (!this.state.user) {
      return <AuthNavigator />;
    }

    return <AppNavigator />
  }
}

export default App;