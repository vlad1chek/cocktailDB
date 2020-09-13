import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CustomIcon from './CustomIcon';

export default function FiltersHeader({nav}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <CustomIcon
            name={'backArrow'}
            style={styles.backButton}
            size={24}
            onPress={() => nav.goBack()}
          />
          <Text style={styles.title}>Filters</Text>
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
    fontFamily: 'Roboto-Medium',
  },
  backButton: {
    marginRight: 40,
  },
});
