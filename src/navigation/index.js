import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();
const Navigations = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Questions" component={QuestionScreen} />
          <Stack.Screen name="Results" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigations;