import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Error() {
  return (
    <View style={styles.container}>
      <Text>Something went wrong. Try to reload the app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
