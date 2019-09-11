import React from 'react';
import style from './Freelance.module.css';
import Fade from 'react-reveal/Fade'

const Freelance = () => {
  return (
     <div>
        <Fade clear>
         <div className={style.flex}>
           <div className={style.shadow}>I am ready to work remoted</div> 
        </div>
        </Fade>
     </div>
  );
}

export default Freelance;
