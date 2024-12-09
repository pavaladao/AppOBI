import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Home Screen
import HomeScreen from '../screens/Home/HomeScreen';

// Import Question Navigators
import Questao1Navigator from '../screens/Questao1/Navigator';
import Questao2Navigator from '../screens/Questao2/Navigator';
import Questao3Navigator from '../screens/Questao3/Navigator';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home"screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questao1Navigator" component={Questao1Navigator} />
        <Stack.Screen name="Questao2Navigator" component={Questao2Navigator} />
        <Stack.Screen name="Questao3Navigator" component={Questao3Navigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;