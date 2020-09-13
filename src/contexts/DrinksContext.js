import React, {useReducer, useContext} from 'react';

const DrinksContext = React.createContext(undefined);

function DrinksReducer(state, action) {
  switch (action.type) {
    case 'fetchCategories': {
      return {
        ...state,
        categoriesList: action.payload,
        error: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: true,
      };
    }
    case 'setCategories': {
      return {
        ...state,
        categoriesList: action.payload,
        drinksList: [],
      };
    }
    case 'getDrinks': {
      return {
        ...state,
        drinksList: [...state.drinksList, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  drinksList: [],
  categoriesList: [],
  error: false,
};

function DrinksProvider({children}) {
  const [state, dispatch] = useReducer(DrinksReducer, initialState);
  return (
    <DrinksContext.Provider value={{state, dispatch}}>
      {children}
    </DrinksContext.Provider>
  );
}

function useDrinksState() {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinksState must be used within a DrinksProvider');
  }
  return context.state;
}

function useDrinksDispatch() {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinksDispatch must be used within a DrinksProvider');
  }
  return context.dispatch;
}

export {DrinksProvider, useDrinksState, useDrinksDispatch};
