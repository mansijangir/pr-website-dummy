import React, { useState } from 'react'
import styles from './header.module.scss'
import {FiArrowUpRight} from "react-icons/fi"

export default function Header() {
  const [header,setHeader] = useState<boolean>(false)

  const changeHeaderBg=()=>
  { 
    if(window.scrollY >= 120)
    {
      setHeader(true)
    }
    else
    {
      setHeader(false)
    }
  }
  window.addEventListener('scroll', changeHeaderBg)

  return (
    
    
       <div className={header ? styles.activeHeader : styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src="./images/logo.png" alt="hero-banner" className={styles.logoImg} />
        </div>
      
          <div className={styles.headerOptionsContainer}>
            <div className={styles.countryContainer}>
              <h3 className={styles.countryName}>miami - dubai - singapore</h3>
              </div>
              <hr className={styles.hrDivider}/>
              <div className={styles.headerOptions}>
                <a href="a.html" className={styles.headerOptionsItem}>about us</a>
                <a href="a.html" className={styles.headerOptionsItem}>focus areas</a>
                <a href="a.html" className={styles.headerOptionsItem}>services</a>
                <a href="a.html" className={styles.headerOptionsItem}>team</a>
                <a href="a.html" className={styles.headerOptionsItem}>contact</a>
              </div>
          </div>
          <div className={styles.headerLinkContainer}>
          <a href="a.html" className={styles.headerLink}>
            luna capital
          </a>
          <FiArrowUpRight className={styles.headerLink}/>
          </div>
       

      </div>
    </div>
   

    
  )
}
