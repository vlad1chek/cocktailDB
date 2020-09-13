import {useEffect} from 'react';
import {getDrinks} from '../../api/apiRequests';
import {useDrinksState, useDrinksDispatch} from '../../contexts/DrinksContext';
import {useFetchCategories} from './useFetchCategories';

export const useFetchDrinks = () => {
  const {categoriesList, loading, error} = useFetchCategories();
  const {drinksList} = useDrinksState();
  const dispatch = useDrinksDispatch();

  useEffect(() => {
    if (!loading) {
      getDrinks(dispatch, categoriesList, drinksList.length);
    }
  }, [categoriesList]);

  return {
    categoriesList,
    drinksList,
    loading: drinksList.length === 0,
    error,
  };
};
