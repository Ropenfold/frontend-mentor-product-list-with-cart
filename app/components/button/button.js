'use client';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions';
import styles from './button.module.css'
import Image from 'next/image'

const Button = ({item: {name, price, image: {thumbnail}}}) => {

  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cartReducer.cart);

  const handleClick = (name, price, thumbnail) => {
    dispatch(addToCart({name, price, thumbnail, qty: 1 }));
    console.log('selectedItemsInDispatch', selectedItems)
  };

  return (
    <button className={styles.addToCartButtonContainer} onClick={() => handleClick(name, price, thumbnail)}>
    <Image src='/assets/images/icon-add-to-cart.svg' width={20} height={20} alt='add to cart icon' />
    <span className={styles.buttonText}>Add to Cart</span>
    </button>
  )
}

export default Button