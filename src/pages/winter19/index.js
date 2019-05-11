import React from "react"
import styles from "./index.module.css"
import Masthead from "../../components/masthead"

export default () => (
  <div>
    <Masthead></Masthead>
    <h1>Winter 2019</h1>

    <section className={styles.threeByThree}>
      <div className={styles.gridOne}></div>
      <div className={styles.gridTwo}></div>
      <div className={styles.gridThree}></div>
      <div className={styles.gridFour}></div>
      <div className={styles.gridFive}></div>
      <div className={styles.gridSix}></div>
      <div className={styles.gridSeven}></div>
      <div className={styles.gridEight}></div>
      <div className={styles.gridNine}></div>
    </section>
  </div>
)