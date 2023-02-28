import React from 'react'
import styles from "./about-us.module.scss"

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
       <div className={styles.aboutUsContainer}>
       <div className={styles.aboutUsImgContainer}>
      <img src="./images/about-us.png" alt="" className={styles.aboutUsImg} />
    </div>
    <div className={styles.aboutUsDescContainer}>
      <h3 className={styles.headingSmall}>about us</h3>
      <h1 className={styles.headingBig}>Who Are We?</h1>
      <p className={styles.description}>Luna PR is the trusted advisor for brands that want to be heard. 
      <br/><br/>
      We specialize in building your brand and flourishing it with credibility in today's media-saturated world where attention spans are limited.
      <br/><br/>
      With a team of over 100 employees, offices in 3 continents, and our expertise in web3 since 2017, we strive to create impactful campaigns that will be talked about for years.
      <br/><br/>
      <strong>We’re committed to excellence. </strong></p>
      </div>
      </div>
    </div>
  )
}
