import React, { useEffect, useState } from "react";
import styles from "./BannerSlider.module.scss";

const BannerSlider = () => {
  const people = ["../assets/image/Banner.png", "../assets/image/Banner2.png"];
  const [currentImg, setcurrentImg] = useState(people[0]);
  const [index, setIndex] = useState(0);
  console.log(index, currentImg)
  const handleImg = (currentIndex, position) => {
    let newIndex;
    
    if (position === "next") {
      newIndex = currentIndex + 1;
      if (newIndex >= people.length) {
        newIndex = 0;
      }
    } else {
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
    }
    
    setIndex(newIndex);
    setcurrentImg(people[newIndex]);
  };

  useEffect(() =>{
    const slider = setInterval(() =>{
        setIndex(prevIndex => {
          const newIndex = prevIndex + 1 >= people.length ? 0 : prevIndex + 1;
          setcurrentImg(people[newIndex]);
          return newIndex;
        });
    }, 5000);
    return () => clearInterval(slider);
  },[])

  return (
    <div className={styles.banner_container}>
      <article>
        <img src={currentImg} alt="current banner" />
      </article>
      <button
        className={`${styles.arrow_button} ${styles.arrow_prev}`}
        onClick={() => handleImg(index, "prev")}
      >
        <img src="../assets/icon/arrowRight.svg" alt="Previous" />
      </button>
      <button
        className={`${styles.arrow_button} ${styles.arrow_next}`}
        onClick={() => handleImg(index, "next")}
      >
        <img src="../assets/icon/arrowRight.svg" alt="Next" />
      </button>
    </div>
  );
};

export default BannerSlider;
