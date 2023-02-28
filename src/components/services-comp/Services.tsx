import React, { useState} from "react";
import styles from "./services.module.scss";
import Data from "./data.json";
import { FiPlus, FiMinus } from "react-icons/fi";
export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("public relations");
  // const [toggle, setToggle] = useState<boolean>(true);
 
  const toggleTab = (index: string) => {
    if(activeTab === index){
      setActiveTab(" ");
      console.log(activeTab)
    }
    setActiveTab(index);
    // setToggle(!toggle);
  };
 
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <h3 className={styles.headingSmall}>high value</h3>

        <h1 className={styles.headingBig}>Services</h1>
        <p className={styles.description}>
          Our team has accumulated a wealth of knowledge from our 600 clients
          and counting. We have helped brands launch, expand, and re-image
          themselves by mastering the following services:
        </p>
        <div className={styles.flexContainer}>
          <div className={styles.descBlock}>
            {Data.children.map((services, index) => {
              return (
                <div key={index}>
                  <button
                     className={
                      activeTab === services.displayName 
                        ? styles.activeBtn
                        : styles.btn
                    }
                    onClick={() => toggleTab(services.displayName)}
                  >
                    <p>{services.displayName}</p>
                    {activeTab === services.displayName ? (
                      <FiMinus />
                    ) : (
                      <FiPlus />
                    )}
                  </button>

                  <div>
                    <ul>
                      {services.lists.map((listname, index) => {
                        return (
                          <li
                            key={index}
                            className={
                              activeTab === services.displayName 
                                ? styles.servicetabActive
                                : styles.servicetab
                            }
                          >
                            {listname.listText}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.imgBlock}>
            {Data.children.map((services, index) => {
              return (
                <div className={styles.imgContainer}>
                  <img
                    src={services.image}
                    alt=""
                    className={
                      activeTab === services.displayName
                        ? styles.activeImg
                        : styles.img
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
