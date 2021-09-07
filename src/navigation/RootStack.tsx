import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStack from './LoginStack';
import QuizStack from './QuizStack';

const Stack = createStackNavigator();

export default () => {
  const accessToken = 'asd';

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoginStack'>
        <Stack.Screen name="Quiz" component={QuizStack} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
    </Stack.Navigator>
  );
};
