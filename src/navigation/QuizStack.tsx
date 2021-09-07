import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../screens/Quiz';
import Resume from '../screens/Resume';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator >
    <Stack.Screen
      name='Quiz'
      component={Quiz}
    />
    <Stack.Screen
      name='Resume'
      component={Resume}
    />
  </Stack.Navigator>
);
