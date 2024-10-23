import React from 'react'
import styles from './modal.module.css'
import Image from 'next/image'
import { ModalCart } from '../modal-cart/ModalCart'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '@/redux/actions'

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const Modal = () => {

const cart = useSelector((state) => state.cartReducer.cart);
const background = useSelector((state) => state.cartReducer.backgroundAndModal);

const dispatch = useDispatch()

const startNewOrder = () => {
    dispatch(resetCart())
}

const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0)
  }

  return (
    <div className={styles.modalContainer}>
        <Image src='frontend-mentor-product-list-with-cart/assets/images/icon-order-confirmed.svg' width={48} height={48} alt='order confirm tick'/>
        <div className={styles.titleText}>Order Confirmed</div>
        <div className={styles.enjoyText}>We hope you enjoy your food!</div>
        <ModalCart/>
        <div className={styles.totalContainer}>
              <div className={styles.totalDescription}>Order Total</div>
              <div className={styles.totalAmount}>{USDollar.format(getTotalCost())}</div>
            </div>
        <div className={styles.buttonContainer}>
            <button className={styles.startNewOrder} onClick={() => startNewOrder()}>Start New Order</button>
          </div>
    </div>
  )
}
