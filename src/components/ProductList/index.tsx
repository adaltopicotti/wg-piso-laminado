import React from 'react';
import Product from '../Product';

import {products} from "../../data";

import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListTexts}>
        <h1 className={styles.productListTitle}>Create & inspire.</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </div>
      <div className={styles.productList}>
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
    )
}

export default ProductList;