import React from "react";
import styles from "./future.module.scss";
import CountUp from "react-countup";
export default function Future() {

  return (
    <div className={styles.future}>
      <div className={styles.futureContainer}>
        <div className={styles.futureCounterContainer}>
          <div className={styles.counter}>
            <p className={styles.headingBig} data-val="7">
            
              <CountUp start={0} end={7} delay={0} suffix=" +">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </p>
            <p className={styles.headingMed}>Years of Excellence</p>
          </div>

          <div className={styles.counter}>
            <p className={styles.headingBig}>
            <CountUp start={0} end={600} delay={0} suffix=" +">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </p>
            <p className={styles.headingMed}>Clients Served</p>
          </div>

          <div className={styles.counter}>
            <p className={styles.headingBig}>
            <CountUp start={0} end={10000} delay={0} suffix="+">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </p>
            <p className={styles.headingMed}>Media Clippings</p>
          </div>
        </div>
        <div className={styles.futureContentDesc}>
          <h3 className={styles.headingSmall}>the future</h3>
          <h1 className={styles.headingBig}>
            Moving into the world of Decentralization
          </h1>
          <p className={styles.description}>
            With the wave of new technology, the rules in marketing are
            changing. Luckily, we are quick adapters. We are constantly learning
            and improving our strategies to support our clients. Our team sees
            the future being decentralized, powered by blockchain technology,
            and hence, we are proud to support companies of all sizes in the
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
