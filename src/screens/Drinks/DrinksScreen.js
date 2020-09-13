import React from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import {useFetchDrinks} from '../../hooks/api/useFetchDrinks';
import {useDrinksDispatch} from '../../contexts/DrinksContext';
import {getDrinks} from '../../api/apiRequests';
import styles from './style';

export default function DrinksScreen() {
  const {categoriesList, drinksList, loading, error} = useFetchDrinks();
  const dispatch = useDrinksDispatch();

  const handleEnd = () => {
    getDrinks(dispatch, categoriesList, drinksList.length);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong. Try to reload the app</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={drinksList}
        keyExtractor={({id}) => id}
        renderItem={({item: {name, img}}) => {
          console.log(img);
          return <DrinkItem name={name} url={img} />;
        }}
        onEndReached={handleEnd}
        onEndReachedThreshold={0}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </View>
  );
}
