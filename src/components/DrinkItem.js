import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function DrinkItem({url, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text style={styles.drinkName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    padding: 0,
    paddingRight: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  drinkName: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 20,
    padding: 20,
    paddingRight: 0,
    color: '#7E7E7E',
    fontSize: 16,
  },
});
