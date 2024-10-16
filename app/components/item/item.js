'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './item.module.css';
import Image from 'next/image';
import Button from '../button/button';
import SelectedButton from '../selected-button/SelectedButton';

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Item = (props) => {
  const selectedItems = useSelector((state) => state.cartReducer.cart);
  console.log('selectedItem', selectedItems);

  const [itemIsSelected, setItemIsSelected] = useState(false);

  useEffect(() => {
    const isSelected = checkItemIsSelected(props.item.name);
    setItemIsSelected(isSelected);
  }, [selectedItems, props.item.name]);  // Depend on selectedItems and item name

  const checkItemIsSelected = (name) => {
    return selectedItems.some(item => item.name === name);
  };

  console.log('itemIsSelected', itemIsSelected);

  return (
    <div className={styles.item}>
      {!itemIsSelected ? (
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={props.item.image.desktop} width={250} height={240} alt={props.item.name} />
          <Button item={props.item} />
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <Image className={styles.selectedImage} src={props.item.image.desktop} width={250} height={240} alt={props.item.name} />
          <SelectedButton item={props.item}/>
        </div>
      )}

      <div className={styles.categoryText}>{props.item.category}</div>
      <div className={styles.descriptionText}>{props.item.name}</div>
      <div className={styles.priceText}>{`${USDollar.format(props.item.price)}`}</div>
    </div>
  );
};

export default Item;
