import React from 'react'
import { useSelector } from 'react-redux';
import ModalCartItem from '../modal-cart-item/ModalCartItem';


export const ModalCart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cart);
  return (
    <div>{cartItems.map(item => <ModalCartItem item={item}/>)}</div>
  )
}
