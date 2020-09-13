import {useEffect} from 'react';
import {fetchCategories} from '../../api/apiRequests';
import {useDrinksState, useDrinksDispatch} from '../../contexts/DrinksContext';

export const useFetchCategories = () => {
  const dispatch = useDrinksDispatch();
  const {categoriesList, error} = useDrinksState();

  useEffect(() => {
    if (categoriesList.length === 0) {
      fetchCategories(dispatch);
    }
  }, []);

  return {
    categoriesList,
    loading: categoriesList.length === 0,
    error,
  };
};
