import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

import styles from "./Toggle.module.scss";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  function handleClick() {
    theme.dispatch({ type: "TOGGLE" });
  }

  return (
    <div className={styles.toggleContainer} onClick={handleClick}>
      <img src="/images/sun.png" alt="" className={styles.toggleIcon} />
      <img src="/images/moon.png" alt="" className={styles.toggleIcon} />
      <div
        className={styles.toggleButton}
        
        style={{ left: theme.state.darkMode ? 0 : "25px" }}
      ></div>
    </div>
  );
};

export default Toggle;
