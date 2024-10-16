import styles from "./page.module.css";
import data from "./data/data";
import Item from "./components/item/Item";
import Cart from "./components/cart/cart";

export default function Home() {
  return (
      <div className={styles.mainContainer}>
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