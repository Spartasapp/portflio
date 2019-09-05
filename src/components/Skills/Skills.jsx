import React, { useState } from 'react';
import style from './Skills.module.css';
import Fade from 'react-reveal/Fade'

const Skill = (props) => {
    const [skill, rotateSkill] = useState(true)
    return <div className={style.widthBlock} onClick={() => rotateSkill(!skill)} >
        {skill ? <div className={style.imgPosition} >
            <img className={style.img} style={{ width: props.el.width + 'px', height: props.el.height + 'px', transition: props.el.transition }} src={props.el.img} alt="" />
        </div>
            : <div className={style.skills}>{props.el.skill}</div>}

    </div>
}

const Skills = () => {

    let state = [
        {
            skill: 'HTML5',
            img: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/landscape/html5.png',
            width: 280,
            height: 150,
            transition: '2s'
        },
        {
            skill: 'CSS (less, flex, grid)',
            img: 'https://code.naustud.io/code-guide/img/css-logo.svg',
            width: 250,
            height: 150,
            transition: '2s'
        },
        {
            skill: 'Javascrpipt (ES5, ES6, ES7), Jquery',
            img: 'https://kaliningrad.unibix.ru/uploads/learn-javascript.png',
            width: 130,
            height: 150,
            transition: '2s'
        },
        {
            skill: 'React (Components, props, class, state, styled components, css-modules, Routing)',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-0icon.svg.png',
            width: 200,
            height: 150,
            transition: '2s'
        },
        {
            skill: 'Redux (Action, reducer, thunk, saga)',
            img: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
            width: 150,
            height: 150,
            transition: '2s'
        },
        {
            skill: 'REST API',
            img: 'https://kuharanbhowmik.files.wordpress.com/2018/02/api_rest.png',
            width: 200,
            height: 150,
            transition: '2s'
        },
        //   {
        //       skill: 'NodeJS',
        //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        //       width: 200,
        //       height: 150
        //   },
        //   {
        //       skill: 'MongoDB',
        //       img: 'http://pluspng.com/img-png/logo-mongodb-png-mongodb-1600.png',
        //       width: 150,
        //       height: 150
        //   },
        //   {
        //       skill: 'Typescript',
        //       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/1280px-TypeScript_Logo_%28Blue%29.svg.png',
        //       width: 250,
        //       height: 150
        //   }
    ];

    let skillsImage = state.map(el => {
        return <Skill el={el} />
    })

    return (
        <div id="skills" className={style.flex}>
            {/* <a name='Skills'></a> */}
            <Fade clear>
                <div className={style.skillsBlock}>
                    <div className={style.margin}> Skills</div>
                    <div className={style.container} >
                        {skillsImage}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
