import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';


const UserImage = ()=>{
  return (
    <Image style={styles.userImage} resizeMode="cover" source={require('../../resources/user_placeholder.png')} />
  )
}

export const AuthenticationScreen = ({navigation})=>{
  return (
    <View style={styles.authenticatonScreenStyle}>
    <Text style={styles.authMessage}>Welcome Stranger !</Text>
      <UserImage />
    <Text style={styles.authSubMessage}>Please log in to continue to awsomness</Text>
    
    
    <View style={styles.socialButtonsContainer}>
      <Button
        buttonStyle={{ width: 200 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        icon={
          <Icon type='zocial' name="facebook" size={24} color="white" />
        }
        iconContainerStyle={{ background: "#000" }}
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => navigation.navigate('Movies')}
        title="Login with Facebook"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
      <Button
        buttonStyle={{ width: 170, backgroundColor:'red' }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        icon={
          <Icon type='zocial' name='google' size={25} color="white" />
        }
        iconContainerStyle={{ background: "#000" }}
        loadingStyle={{}}
        onPress={() => alert("click")}
        title="Or With Google"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  authenticatonScreenStyle:{
    display:'flex',
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    marginTop:150
  },
  authMessage:{
    fontSize:24,
    fontWeight:'500',
    color:'black',
    marginBottom:50
  },
  authSubMessage:{
    marginTop:15,
    fontSize:18,
    fontWeight:'300',
    color:'gray',
    width:200,
    textAlign:'center'
    
  },
  avatarStyle:{
    width:200,
    height:200
  },
  userImage:{
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75
  },
  socialButtonsContainer:{
    display:'flex',
    flex:1,
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop:100
  }
});