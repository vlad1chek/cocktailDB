import React from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
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
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={drinksList}
        keyExtractor={({id}) => id}
        renderItem={({item: {name, img}}) => (
          <DrinkItem name={name} url={img} />
        )}
        onEndReached={handleEnd}
        onEndReachedThreshold={0}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </View>
  );
}
