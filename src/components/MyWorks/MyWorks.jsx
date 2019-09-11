import React from 'react';
import style from './MyWorks.module.css';
import Fade from 'react-reveal/Fade'
import todolist from '../../assets/todolist.png';
import stopWatch from '../../assets/Stopwatch.png'

const MyWorks = () => {
  let transition = {
    transition: '1s'
  }
  return (
     <div id='Works' className={style.box}>
       <Fade clear>
         <h2>Works</h2>
         <div className={style.container}>
         <a className={style.myWork} href="https://spartasapp.github.io/toDoList/" target='_blank'><img style={transition} className={style.blurImg} src={todolist} alt=''/></a>   
         <a className={style.myWork} href="https://spartasapp.github.io/stopWatch/" target='_blank'><img style={transition} className={style.blurImg} src={stopWatch} alt=''/></a> 
         </div>
         <a className={style.myWorks} href="https://github.com/Spartasapp ">More works here...</a>
         </Fade>  
     </div>
  );
}

export default MyWorks;
