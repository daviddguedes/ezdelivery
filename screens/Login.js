import React from "react";
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Text, Header, Card, CardItem, Body } from 'native-base';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';


class Login extends React.Component {

   _signIn = async () => {
      try {
         await GoogleSignin.configure();

         const data = await GoogleSignin.signIn();

         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

         // const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

         const currentUser = await firebase.auth().signInWithCredential(credential);

         const perfil = currentUser.user.toJSON();
         console.log(perfil.displayName);
         console.log(perfil.email);
         console.log(perfil.photoURL);

         console.log(currentUser.user.toJSON());
      } catch (e) {
         console.error(e);
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
                           <Button onPress={this._signIn} primary bordered block>
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