import React from 'react'
import styles from './cartItem.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../../../redux/actions';


let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const CartItem = ({item: {name, price, qty, thumbnail}}) => {

  const dispatch = useDispatch();

  const deleteItem = (itemName) => {
      dispatch(deleteCartItem(itemName))
      console.log('item', itemName);
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>{name}</div>
        <div className={styles.priceContainer}>
            <div className={styles.quantityContainer}>{`${qty}x`}</div>
            <div className={styles.itemPriceContainer}>{`@${USDollar.format(price)}`}</div>
            <div className={styles.itemTotalContainer}>{`${USDollar.format(price * qty)}`}</div>
        </div>
        </div>
        <div className={styles.deleteContainer} onClick={() => deleteItem(name)}>
          <Image className={styles.selectedImage} src='/assets/images/icon-remove-item.svg' width={20} height={20} alt={name} /></div>
    </div>
  )
}

export default CartItem