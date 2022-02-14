/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationScreen } from './app/screens/Authentication';
import MoviesListScreen from './app/screens/MoviesList';
import { NavigationContainer } from '@react-navigation/native';
import { MovieDetailsScreen } from './app/screens/MovieDetails';
import { Provider, useSelector } from 'react-redux';
import store from './app/redux/store';
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';



const Stack = createNativeStackNavigator();
const HeaderTitle = (props)=>{
const favorites = useSelector(state => state);

  return (
    
      <View style={{display:'flex',flexDirection:'row', flex:2, alignItems:'center'}}>
        <Text style={{color:'white', fontSize:24}}>List of movies</Text>
        <TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row', marginLeft:150, padding:10}}>
          <Icon name="bells" type="antdesign" size={25} color="#ffb049"  />
          <Text style={{color:'#ffb049', fontSize:18, fontWeight:'bold', marginLeft:5}}>{favorites.count}</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
}
function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={AuthenticationScreen} />
        <Stack.Screen options={{
          headerShown:true,
          title:'Popular Movies',
          headerTransparent:true,
          headerStyle:{
            backgroundColor:'#05131e'
          },
          headerTitleStyle:{
            color:'white'
          },
          headerBackVisible:false,
          headerTitle:()=>(<HeaderTitle></HeaderTitle>)
            
        }} 
        name="Movies" component={MoviesListScreen} />
        <Stack.Screen options={{
          headerShown:false,
            
        }} name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
