import React, {useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useFetchCategories} from '../../hooks/api/useFetchCategories';
import {useDrinksDispatch} from '../../contexts/DrinksContext';
import CategoryItem from '../../components/CategoryItem';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import screens from '../../navigation/screens';
import styles from './style';

export default function FiltersScreen({navigation}) {
  const {categoriesList, loading, error} = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState(categoriesList);

  const dispatch = useDrinksDispatch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleToggle = (categoryName) => {
    setSelectedCategories((prevState) => {
      const currentIndex = prevState.findIndex(
        ({name}) => categoryName === name,
      );
      const isLastCategoryInArray =
        selectedCategories.filter(({isSelected}) => isSelected).length === 1;
      return prevState.map((filter, id) => {
        if (id === currentIndex) {
          return {
            ...filter,
            isSelected: isLastCategoryInArray ? true : !filter.isSelected,
          };
        }
        return filter;
      });
    });
  };

  const handleApplyCategories = () => {
    dispatch({type: 'setCategories', payload: selectedCategories});
    navigation.navigate(screens.Drinks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCategories}
        renderItem={({item: {name, isSelected}}) => {
          return (
            <CategoryItem
              onPress={() => handleToggle(name)}
              name={name}
              isSelected={isSelected}
            />
          );
        }}
        keyExtractor={({name}) => name}
      />
      <Pressable
        style={styles.applyButtonContainer}
        onPress={() => handleApplyCategories()}>
        <Text style={styles.applyText}>APPLY</Text>
      </Pressable>
    </View>
  );
}
