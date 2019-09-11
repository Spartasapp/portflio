import React from 'react';
import style from './Contacts.module.css';
import Fade from 'react-reveal/Fade'

const Contacts = () => {
   return (
      <div id='Contacts' className={style.container}>
         <Fade clear>
         <input className={style.input} type="text" placeholder="Name(Required)" required />
         <input className={style.input} type="email" placeholder="Email(Required)" required />
         <input className={style.input} type="text" placeholder="Subject" />
         <textarea placeholder="Write your message here..." ></textarea>
         <button className={style.buttonSubmit} type="submit">SEND</button>
         </Fade>
      </div>
   );
}

export default Contacts;
