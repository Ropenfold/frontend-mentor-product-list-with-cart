'use client'

import styles from "./page.module.css";
import data from "./data/data";
import Item from "./components/item/item";
import Cart from "./components/cart/cart";
import { useSelector } from 'react-redux';
import { Modal } from "./components/modal/Modal";

export default function Home() {

  const background = useSelector((state) => state.cartReducer.backgroundAndModal);

  return (
      <div className={styles.mainContainer}>
           {background && (
            <>
        <div className={styles.background} />
          <Modal />
          </>
      )}
          <div className={styles.mainItemContainer}>
          <h1 className={styles.title}><b>Desserts</b></h1>
          <div className={styles.contentContainer}>
          <div className={styles.itemContainer}>
          {data && data.map(item => (
            <Item item={item}/>
          ))}
          </div>
          </div>
          </div>
          <Cart />
      </div>
  );
}