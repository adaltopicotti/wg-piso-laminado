import React from "react";

import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeft}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introPresentation}>Hello, my name is</h2>
          <h1 className={styles.introName}>Adalto Picotti</h1>

          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.titleItem}>Web Developer</div>
              <div className={styles.titleItem}>UI/UX Designer</div>
              <div className={styles.titleItem}>Photographer</div>
              <div className={styles.titleItem}>Writer</div>
              <div className={styles.titleItem}>Content Creator</div>
            </div>
          </div>
          <p className={styles.introDescription}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className={styles.introScroll}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.introRight}>
        <div className={styles.introImageBg}></div>
        <img src="/images/me.png" alt="" className={styles.introImage} />
      </div>
    </div>
  );
};

export default Intro;
