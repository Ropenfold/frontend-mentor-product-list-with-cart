import React from 'react'
import styles from './modalCartItem.module.css'
import Image from 'next/image';

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

const ModalCartItem = ({item: {name, price, qty, thumbnail}}) => {
  return (
    <div className={styles.itemContainer}>
        <Image className={styles.thumbnailImage} src={thumbnail} height={50} width={50} alt={name} />
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>{name}</div>
        <div className={styles.priceContainer}>
            <div className={styles.quantityContainer}>{`${qty}x`}</div>
            <div className={styles.itemPriceContainer}>{`@${USDollar.format(price)}`}</div>
            <div className={styles.itemTotalContainer}>{`${USDollar.format(price * qty)}`}</div>
        </div>
        </div>
    </div>
  )
}

export default ModalCartItem