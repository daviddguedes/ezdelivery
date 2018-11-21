import React from "react";
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

class AuthScreen extends React.Component {

   doSignup = () => {
      return this.props.navigation.navigate('Signup'); 
   }

   doSignin = () => {
      return this.props.navigation.navigate('Login');
   }

   render() {
      return (
         <Container style={styles.containerCenter}>
            <Content>
               <Image style={styles.image} source={require('./../assets/logo.png')} />

               <Button onPress={this.doSignup} primary style={styles.btnSignin}>
                  <Text style={{color: '#ffffff'}}>Register</Text>
               </Button>
               <Button onPress={this.doSignin} primary style={styles.btnSignin}>
                  <Text style={{color: '#ffffff'}} style={styles.textCenter}>Login</Text>
               </Button>
            </Content>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   containerCenter: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e6e6e6',
   },
   image: {
      width: Dimensions.get('window').width / 100 * 70,
      height: Dimensions.get('window').width / 100 * 70,
   },
   btnSignin: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width / 100 * 70,
      marginBottom: 10,
      backgroundColor: '#0075b5',
   },
});

export default AuthScreen;