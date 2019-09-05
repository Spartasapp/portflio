import React from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   return (
      <div className={style.box}>
         <div className={style.flexContainer}>
            <div className={style.linksContainer}>
               <a className={(style.links)} href="https://www.facebook.com/profile.php?id=100023820002802" target='_blank'><FontAwesomeIcon size='2x' icon={faFacebook} /></a>
               <a className={style.links} href="https://www.linkedin.com/in/siarhei-baravik-91ab46181/" target='_blank'><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
               <a className={style.links} href="https://vk.com/spartasapp" target='_blank'><FontAwesomeIcon size='2x' icon={faVk} /></a>
               <a className={style.links} href="@Spartasapp" target='_blank'><FontAwesomeIcon size='2x' icon={faTelegram} /></a>
            </div>
            <a name='Contacts'></a>
            <div className={style.legalInfrmation}>© My Portfolio 2019</div>
         </div>
      </div>
   );
}

export default Footer;
