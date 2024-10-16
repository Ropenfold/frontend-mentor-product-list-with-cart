// redux/actions.js
export const addToCart = (data) => {
    return {
    type: 'ADD_TO_CART',
    payload: data
    }
 };
  
 export const deleteCartItem = (itemName) => {
  console.log('itemName', itemName);
  return {
    type: 'DELETE_ITEM',
    payload: itemName
  }
 }

 export const decrementItem = (itemName) => {
  console.log('itemName', itemName);
  return {
    type: 'DECREMENT_ITEM',
    payload: itemName
  }
 }

 export const incrementItem = (itemName) => {
  console.log('itemName', itemName);
  return {
    type: 'INCREMENT_ITEM',
    payload: itemName
  }
 }