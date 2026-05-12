import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import Maquinas from './screens/Maquinas/Maquinas';
import Dashboard from './screens/Dashboard/Dashboard';
import Formulario from './screens/Formulario/Formulario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#005b96' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Maquinas" 
          component={Maquinas} 
          options={{ title: 'Lista de Máquinas', headerBackVisible: false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: 'Detalhes da Máquina' }} 
        />
        <Stack.Screen 
          name="Formulario" 
          component={Formulario} 
          options={{ title: 'Relatório' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
