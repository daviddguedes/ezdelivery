import React from "react";
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Text, Header, Card, CardItem, Body } from 'native-base';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase';


class Login extends React.Component {

   state = {
      doingLogin: false,
   }

   signIn = async () => {
      this.setState({ doingLogin: true });
      try {
         await GoogleSignin.configure();
         const data = await GoogleSignin.signIn();
         this.setState({ doingLogin: false });
         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

         const currentUser = await firebase.auth().signInWithCredential(credential);
         
         if (currentUser) {
            this.props.navigation.navigate('Main');
         }
      } catch (error) {
         this.setState({ doingLogin: false });
         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('Canceled');
         } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('In progress');
         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('Play Services is not Available');
         } else {
            console.log('Error: ', JSON.stringify(error));
            alert('Error!');
         }
      }
   }

   render() {
      return (
         <Container style={styles.containerCenter}>
            <Content>
               <Image style={styles.image} source={require('./../assets/logo.png')} />

               <Content>
                  <Card>
                     <CardItem style={{
                        backgroundColor: '#0075b5'
                     }} header bordered>
                        <Text style={{
                           color: '#ffffff',
                        }}>SIGN-IN</Text>
                     </CardItem>
                     <CardItem bordered>
                        <Body>
                           <Text>SIGN-IN WITH</Text>
                        </Body>
                     </CardItem>
                     <CardItem bordered>
                        <Body>
                           <Button disabled={this.state.doingLogin} onPress={this.signIn} primary bordered block>
                              <Text style={styles.textCenter}>Google</Text>
                           </Button>
                        </Body>
                     </CardItem>
                  </Card>
               </Content>
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
   },
});

export default Login;