import React from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faFacebook, faTelegram, faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade'

const Footer = () => {
   let transition = {
      transition: '1s'
   }
   return (
      <div className={style.box}>
         <Fade clear>
         <div className={style.flexContainer}>
            <div className={style.linksContainer}>
               <a className={style.links} style={transition} href="https://www.facebook.com/profile.php?id=100023820002802" target='_blank'><FontAwesomeIcon size='2x' icon={faFacebook} /></a>
               <a className={style.links} style={transition} href="https://www.linkedin.com/in/siarhei-baravik-91ab46181/" target='_blank'><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
               <a className={style.links} style={transition} href="https://vk.com/spartasapp" target='_blank'><FontAwesomeIcon size='2x' icon={faVk} /></a>
               <a className={style.links} style={transition} href="https://t.me/Spartasapp" target='_blank'><FontAwesomeIcon size='2x' icon={faTelegram} /></a>
               <a className={style.links} style={transition} href="https://github.com/Spartasapp" target='_blank'><FontAwesomeIcon size='2x' icon={faGithub} /></a>
            </div>
            <div className={style.legalInfrmation}>© My Portfolio 2019</div>
         </div>
         </Fade>
      </div>
   );
}

export default Footer;
