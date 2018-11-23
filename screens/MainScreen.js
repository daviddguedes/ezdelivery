import React from 'react';
import firebase from 'react-native-firebase';
import { Container, Button, Text } from 'native-base';

import Login from './Login';

class MainScreen extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         user: null,
      };
   }

   componentDidMount() {
      const user = firebase.auth().currentUser;
      if (user) {
         this.setState({user});
      }
   }

   doLogout = () => {
      return firebase.auth().signOut().then(() => {
         this.props.navigation.navigate('Login');
      }).catch(e => {
         console.log('erro logout:', JSON.stringify(e.code));
      });
   }

   render() {
      return (
         <Container>
            { this.state.user && <Text>Welcome to my awesome app {this.state.user.email}!</Text>}

            <Button block onPress={this.doLogout}>
               <Text>SignOut!</Text>
            </Button>
         </Container>
      );
   }

}

export default MainScreen;