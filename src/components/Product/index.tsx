import React from 'react';

import styles from './Product.module.scss';

type ProductProps ={
  img: string;
  link: string;
}

const Product = ({img, link}: ProductProps) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productBrowser}>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
      </div>
      <a href="https://adaltopicotti.github.io" target="_blank">
        <img src={img} alt="" className={styles.productImage} />
      </a>
    </div>
    )
}

export default Product;