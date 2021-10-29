import type { NextPage } from "next";
import Intro from "../components/Intro";
import About from "../components/About";
import styles from "../styles/Home.module.scss";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Toggle from "../components/Toggle";
import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/themeContext";

const Home: NextPage = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode ? "white" : "" }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default Home;
