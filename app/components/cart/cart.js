'use client';

import React from 'react'
import Image from 'next/image'
import styles from "./cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { completeOrder } from '../../../redux/actions';

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);

  const getTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.qty, 0); 
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0)
  }
  
  const confirmOrder = () => {
    dispatch(completeOrder())
  }

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartText}>
        <b>{`Your Cart (${getTotalCartQuantity()})`}</b>
      </h2>
      {cart.length === 0 ? (
        <div className={styles.itemList}>
          <Image src='/frontend-mentor-product-list-with-cart/img/illustration-empty-cart.svg' width={128} height={128} alt='empty cart' />
          <p className={styles.emptyCartText}>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className={styles.itemList}>
            {cart.map((item, key) => {
              return <CartItem key={key} item={item} />;
            })}
            <div className={styles.totalContainer}>
              <div className={styles.totalDescription}>Order Total</div>
              <div className={styles.totalAmount}>{USDollar.format(getTotalCost())}</div>
            </div>
          </div>
          <div className={styles.deliveryContainer}>
            <Image src='/frontend-mentor-product-list-with-cart/img/icon-carbon-neutral.svg' width={25} height={30} alt='carbon neutral logo' />
            <p>This is a <b>carbon-neutral</b> delivery</p>
          </div>
  
          <div className={styles.buttonContainer}>
            <button className={styles.payButton} onClick={() => confirmOrder()}>Confirm Order</button>
          </div>
        </>
      )}
    </div>
  );  
}

export default Cart