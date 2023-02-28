import React, { useState } from "react";
import styles from "./focus-areas.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Data from "./data.json";
import { FiSliders } from "react-icons/fi";
// import { url } from "inspector";

export default function FocusAreas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext=()=>
    {
      const firstSlide = currentIndex === 0;
      const newIndex = firstSlide ? Data.carouselitem.length - 1 : currentIndex-1;
      setCurrentIndex(newIndex)

    }
    const goToPrev=()=>
    {
     

      const lastSlide = currentIndex === Data.carouselitem.length-1;
        
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    
  
  return (
    <div className={styles.focusAreas}>
      <div className={styles.focusAreasContainer}>
        <h3 className={styles.headingSmall}>spotlight</h3>
        <div className={styles.container}>
          <h1 className={styles.headingBig}>Focus Areas</h1>
          <div className={styles.controllerContainer}>
            <button className={styles.carouselNavigation}>
              <AiOutlineArrowLeft onClick={goToNext} />
            </button>
            <div
              className={`${styles.carouselBtn} ${styles.activeCarouselBtn}`}
            ></div>
            <div className={styles.carouselBtn}></div>
            <div className={styles.carouselBtn}></div>
            <div className={styles.carouselBtn}></div>
            <button className={styles.carouselNavigation}>
              <AiOutlineArrowRight onClick={goToPrev} />
            </button>
          </div>
        </div>
        
        <div className={styles.carouselContainer}>
          {Data.carouselitem.map((data, index) => {
            return (
              <>
              {index === currentIndex && (
              <div key={index}
                className={styles.carouselItem}
                style={{
                  backgroundImage: `linear-gradient(13.94deg, #242328 11.13%, rgba(36, 35, 40, 0) 113.18%),url(${data.carouselBg})`,
                }}
              >
               
                
               <div className={styles.iconContainer}>
                  <img src={data.carouselIcon} alt="" />
                </div>
               
                <div className={styles.verticalDiv}>
                  <p>{data.carouselItems}</p>
                </div>
               
                
              </div>)}</>
            );
          })}
        </div>
      </div>
    </div>
  );
}
