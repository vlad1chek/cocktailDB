import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrinksNavigator from './DrinksNavigator';
import {DrinksProvider} from '../contexts/DrinksContext';
import screens from './screens';

const GeneralStack = createStackNavigator();

export default function App() {
  return (
    <DrinksProvider>
      <NavigationContainer>
        <GeneralStack.Navigator>
          <GeneralStack.Screen
            name={screens.App}
            component={DrinksNavigator}
            options={{headerShown: false}}
          />
        </GeneralStack.Navigator>
      </NavigationContainer>
    </DrinksProvider>
  );
}
