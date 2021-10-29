import React from "react";

import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={[styles.aboutCard, styles.aboutBg].join(" ")}></div>
        <div className={styles.aboutCard}>
          <img
            src="https://cdn.leroymerlin.com.br/products/piso_laminado_cola_eucafloor_prime_valencia_7mmx19,7cmx1,37m_89546310_22c5_600x600.jpeg"
            alt=""
            className={styles.aboutImage}
          />
        </div>
      </div>
      <div className={styles.aboutRight}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.aboutSubtitle}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={styles.aboutDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className={styles.aboutAward}>
          <img src="/images/award.png" alt="" className={styles.awardImage} />
          <div className={styles.aboutAwardTexts}>
            <h4 className={styles.aboutAwardTitle}>International Design</h4>
            <p className={styles.aboutAwardDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              natus libero obcaecati similique expedita pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
