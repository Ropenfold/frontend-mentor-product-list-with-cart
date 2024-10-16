'use client';

import React from 'react'
import Image from 'next/image'
import styles from "./cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';

const Cart = () => {

  const cart = useSelector((state) => state.cartReducer.cart);
  console.log('cart', cart)

  const getTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.qty, 0); 
  };
  

  return (
    <div className={styles.cartContainer} >
        <h2 className={styles.cartText}><b>{`Your Cart (${getTotalCartQuantity()})`}</b></h2>
        {cart.length === 0 ? <div className={styles.itemList}>
    <Image src='/assets/images/illustration-empty-cart.svg' width={128} height={128} alt='empty cart'/>
    <p className={styles.emptyCartText}>Your added items will appear here</p>
    </div> : <div className={styles.itemList}>
      {cart.map((item, key) => {
       return <CartItem item={item} />
      })}
    </div>}
        
    </div>
  )
}

export default Cart