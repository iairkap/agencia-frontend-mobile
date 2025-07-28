import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar pantallas
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Ocultar header por defecto
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Bienvenido'
          }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            title: 'Dashboard'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
