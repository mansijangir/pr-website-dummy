import React from 'react'
import styles from './hero-banner.module.scss'
import {FiArrowRight} from "react-icons/fi"

export default function HeroBanner() {
  return (
    <div className={styles.heroBanner} style={{
      backgroundImage: 'url(./images/hero-banner-desktop.png)', backgroundRepeat: "no-repeat"
    }}>
     <div className={styles.contentContainer}>
      <h3 className={styles.contentText_small}>Defining the Future of Technology by</h3>
      <h1 className={styles.contentText_big}>Bringing Blockchain to the Masses</h1>
      <button className={styles.bannerButton}>let's get started <FiArrowRight className={styles.arrow}/></button>
     </div>
    </div>
  )
}
