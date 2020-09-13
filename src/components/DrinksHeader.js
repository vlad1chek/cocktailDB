import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CustomIcon from './CustomIcon';
import screens from '../navigation/screens';

export default function DrinksHeader({nav}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Drinks</Text>
          <CustomIcon
            name={'filter'}
            style={styles.filtersButton}
            size={24}
            onPress={() => nav.navigate(screens.Filters)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 17,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  filtersButton: {
    marginLeft: 'auto',
  },
});
