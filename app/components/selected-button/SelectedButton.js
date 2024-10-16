'use client'

import React from 'react'
import styles from './selectedButton.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem } from '../../../redux/actions';
const SelectedButton = ({item: {name, price}}) => {

  const dispatch = useDispatch();
  

  const incrementQuantity = (itemName) => {
    console.log('increment clicked');
    dispatch(incrementItem(itemName));
  }

  const decrementQuantity = (itemName) => {
    console.log('decrement clicked');
    dispatch(decrementItem(itemName));
  }
  
  return (
    <div className={styles.selectedButtonContainer}>
      <button className={styles.incrementDecrement} onClick={() => decrementQuantity(name)}>
      <Image src='/assets/images/icon-decrement-quantity.svg' width={15} height={15} alt='add to cart icon'/>
      </button >
      <span>0</span>
      <button className={styles.incrementDecrement} onClick={() => incrementQuantity(name)}>
      <Image className={styles.incrementDecrement} src='/assets/images/icon-increment-quantity.svg' width={15} height={15} alt='add to cart icon'/>
      </button>
      </div>
  )
}

export default SelectedButton