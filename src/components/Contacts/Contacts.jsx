import React from 'react';
import style from './Contacts.module.css';

const Contacts = () => {
   return (
      <div className={style.container}>
         <input className={style.input} type="text" placeholder="Name(Required)" required />
         <input className={style.input} type="email" placeholder="Email(Required)" required />
         <input className={style.input} type="text" placeholder="Subject" />
         <textarea placeholder="Write your message here..." ></textarea>
         <button className={style.buttonSubmit} type="submit">SEND</button>
      </div>
   );
}

export default Contacts;
