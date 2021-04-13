import React, {useReducer, createContext} from 'react';

const initialState = {
  positions: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POSITION':
      return {positions: [...state.positions, action.value]}
    case 'DELETE_POSITION':
      return {positions: [...state.positions.filter(position => position !== action.value)]}
    default:
      return state;
  }
};

export const PositionContext = createContext();

export const PositionContextProvider = ({children}) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    positions: state.positions,
    addPosition: value => {
      dispatch({type: 'ADD_POSITION', value})
    },
    deletePosition: value => {
      dispatch({type: 'DELETE_POSITION', value})
    }
  };

  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
};