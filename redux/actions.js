export const addToCart = (data) => {
    return {
    type: 'ADD_TO_CART',
    payload: data
    }
 };
  
 export const deleteCartItem = (itemName) => {
  return {
    type: 'DELETE_ITEM',
    payload: itemName
  }
 }

 export const decrementItem = (itemName) => {
  return {
    type: 'DECREMENT_ITEM',
    payload: itemName
  }
 }

 export const incrementItem = (itemName) => {
  return {
    type: 'INCREMENT_ITEM',
    payload: itemName
  }
 }

 export const completeOrder = () => {
  return {
    type: 'COMPLETE_ORDER',
  }
 }

 export const resetCart = () => {
  return {
    type: 'RESET_CART',
  }
 }