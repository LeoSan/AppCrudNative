import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

  //Importamos vistas 
  import Inicio from './views/Inicio';

  //Inicio de React _Nacitacion 
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  const Stack = createStackNavigator();

const App = () => {

  return (
     <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Inicio"
          >
              <Stack.Screen
                name='Inicio'
                component={Inicio}
              >
              
              </Stack.Screen>           
          </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
 
});

export default App;
