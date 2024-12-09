import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const Stack = createNativeStackNavigator();

const Question1Navigator = () => (
  <Stack.Navigator initialRouteName="Screen1">
    <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Questão - OBI2009-F2N1' }} />
    <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Questão - OBI2009-F2N1' }} />
    <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Questão - OBI2009-F2N1' }} />
    <Stack.Screen name="Screen4" component={Screen4} options={{ title: 'Questão - OBI2009-F2N1' }} />
    <Stack.Screen name="Screen5" component={Screen5} options={{ title: 'Questão - OBI2009-F2N1' }} />
  </Stack.Navigator>
);

export default Question1Navigator;
