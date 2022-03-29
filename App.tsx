
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigation } from './src/routes/TabNavigation';
import HomeScreen from './src/screens/homeScreen/HomeScreen';

const App = () => {

  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
};


export default App;
