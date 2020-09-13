import axios from 'axios';

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCategories = async (dispatch) => {
  try {
    const {data} = await axios.get(`${apiUrl}/list.php?c=list`);
    console.log('categories', data);
    const categoriesList = data.drinks.map((drink) => ({
      name: drink.strCategory,
      isSelected: true,
    }));
    dispatch({type: 'fetchCategories', payload: categoriesList});
  } catch (error) {
    dispatch({type: 'error'});
    throw new Error(error);
  }
};

export const getDrinksByCategory = async (categoryName) => {
  try {
    const {data} = await axios.get(`${apiUrl}/filter.php?c=${categoryName}`);
    const drinks = data.drinks.map(({idDrink, strDrink, strDrinkThumb}) => ({
      id: idDrink,
      img: strDrinkThumb,
      name: strDrink,
    }));
    console.log('drinks', drinks.slice(0, 1));
    return {
      title: categoryName,
      data: drinks.slice(0, 4),
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getDrinks = async (dispatch, categoriesList, id) => {
  try {
    const selectedCategories = categoriesList.filter(
      ({isSelected}) => isSelected,
    );
    if (id < selectedCategories.length) {
      const data = await getDrinksByCategory(
        selectedCategories[id === 0 ? 0 : id].name,
      );
      dispatch({type: 'getDrinks', payload: data});
    }
  } catch (e) {
    throw new Error(e);
  }
};
