import React from "react";
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Text, Header, Card, CardItem, Body } from 'native-base';

class Signup extends React.Component {

   doRegister = () => {
      alert('register');
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
                        }}>REGISTER</Text>
                     </CardItem>
                     <CardItem bordered>
                        <Body>
                           <Text>CONNECT WITH</Text>
                        </Body>
                     </CardItem>
                     <CardItem bordered>
                        <Body>
                           <Button onPress={this.doRegister} primary bordered block>
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

export default Signup;