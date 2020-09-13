import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrinksScreen from '../screens/Drinks/DrinksScreen';
import FiltersScreen from '../screens/Filters/FiltersScreen';
import DrinksHeader from '../components/DrinksHeader';
import FiltersHeader from '../components/FiltersHeader';
import screens from './screens';

const DrinksStack = createStackNavigator();

export default function DrinksNavigator({navigation}) {
  return (
    <DrinksStack.Navigator>
      <DrinksStack.Screen
        name={screens.Drinks}
        component={DrinksScreen}
        options={{
          header: () => {
            return <DrinksHeader nav={navigation} />;
          },
        }}
      />
      <DrinksStack.Screen
        name={screens.Filters}
        component={FiltersScreen}
        options={{
          header: () => {
            return <FiltersHeader nav={navigation} />;
          },
        }}
      />
    </DrinksStack.Navigator>
  );
}
