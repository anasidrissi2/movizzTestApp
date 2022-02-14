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


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={AuthenticationScreen} />
        <Stack.Screen options={{
          headerShown:false,
            
        }} 
        name="Movies" component={MoviesListScreen} />
        <Stack.Screen options={{
          headerShown:false,
            
        }} name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
