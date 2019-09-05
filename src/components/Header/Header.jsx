import React from 'react';
import style from './Header.module.css';
import logo from '../../logo.svg';
import myLogo from '../../assets/logo1.png'

class Header extends React.Component {
  state = {
    showButtonMenu: true,
    editMode: false,
    isMove: false
  }
  showMenu = () => {
    this.setState({
      editMode: true,
      isMove: false,
      showButtonMenu: false
    })
  }
  hideMenu = () => {
    this.setState({
      editMode: false,
      isMove: true,
      showButtonMenu: true
    })
  }
  transition = {
    transition: '2s'
  }
  render = () => {
    return (
      <div className={style.container}>
        <div >
          <img className={style.myLogo} style={this.transition} src={myLogo} alt=""/>
        </div>
        <header className={style.appHeader}>
        
          {this.state.editMode && <div className={style.App}>
            <div className={style.Appdiv} onClick={this.hideMenu}>
              <img src={logo} className={this.state.isMove ? style.Applogo1 : style.Applogo2} alt="logo" />
            </div>
          </div>}
          {this.state.showButtonMenu && <div onClick={this.showMenu} className={style.buttonMenu} style={this.transition}> Menu</div>}
          {this.state.editMode && <ul className={style.listOfLinks}>
            <li><a className={style.unghors} href="#MainMenu">MainMenu</a></li>
            <li><a className={style.unghors} href="#skills">Skills</a></li>
            <li><a className={style.unghors} href="#Works">Works</a></li>
            <li><a className={style.unghors} href="#Contacts">Contacts</a></li>
          </ul>}
        </header>
      </div>
    );
  }
}

export default Header;
