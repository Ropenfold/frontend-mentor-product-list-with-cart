import { combineReducers } from '@reduxjs/toolkit';

const initialState = { cart: [] };

const selectReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cart: [...state.cart, action.payload]
      };
      case 'DELETE_ITEM':
        return { 
          ...state, 
          cart: state.cart.filter(item => action.payload !== item.name),
        };
        case 'INCREMENT_ITEM':
          return { 
            ...state, 
            cart: state.cart.map(item => {
              if (action.payload === item.name) {
                return {
                  ...item,
                  qty:item.qty + 1
                };
              }
            return item;  
             }),
          };
          case 'DECREMENT_ITEM':
            return { 
              ...state, 
              cart: state.cart.map(item => {
                if (action.payload === item.name) {
                  return {
                    ...item,
                    qty:item.qty - 1
                  };
                }
                return item;
              }).filter(item => item.qty > 0),
            };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cartReducer: selectReducer,
});
export default rootReducer;
