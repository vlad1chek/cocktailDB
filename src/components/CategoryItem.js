import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import CustomIcon from './CustomIcon';

export default function CategoryItem({name, isSelected, onPress: handlePress}) {
  return (
    <Pressable onPress={() => handlePress()}>
      <View style={styles.container}>
        <Text style={styles.categoryName}>{name}</Text>
        {isSelected && <CustomIcon name={'tick'} size={24} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
    paddingHorizontal: 35,
  },
  categoryName: {
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: 20,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#7E7E7E',
  },
});
