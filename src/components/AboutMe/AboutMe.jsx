import React from 'react';
import style from './AboutMe.module.css';
import img from '../../assets/Avatar.jpg'
const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutMe}>
        <p>Siarhei Baravik</p>
        <p>Front-end developer</p>
      </div>
      <div className={style.img}>
        <img className={style.img1} src={img} alt="" />
      </div>
      
    </div>
  );
}

export default AboutMe;
