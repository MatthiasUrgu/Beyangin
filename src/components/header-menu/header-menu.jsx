import s from "./style.module.scss";
import { useState } from "react";
function HeaderMenu({ list1, list2, list3, list4 }) {

  const [ Hovered, setIsHovered] = useState('')
 
  const buttonClass = Hovered ? `` : `désactiver`;
  const classover = Hovered ? s.hamburgerOn : s.hamburgerOff
  function Toggle(){
    setIsHovered(!Hovered)
    console.log(Hovered);
  }

  return (
    <div className={s.menu}>
      <nav className={s.navMenu}>
        <a href="home">
          <li> {list1}</li>
        </a>
        <a href="about">
          <li> {list2}</li>
        </a>
        <a href="library">
          <li> {list3}</li>
        </a>
        <a href="contact">
          <li> {list4}</li>
        </a>
      </nav>
      <div className={s.hamburger}>

        <button className={`${s.hamburgerButton} ${buttonClass}`} onClick={Toggle}>
          {/* {Hovered ? `activer` : 'désactiver'} */}
            <span className={s.hamburgerHide}></span>
            <span className={s.hamburgerHide}></span>
            <span className={s.hamburgerHide}></span>
            
        </button>

        <section className={`${classover} ${s.hamburgerOpen}`}>
        {/* {Hovered ? `hamburgerOn` : 'hamburgerOff'} */}
        <ol>
          <li><a href="home">{list1} </a></li>
          <li><a href="about">{list2}</a></li>
          <li><a href="library">{list3}</a></li>
          <li><a href="contact">{list4}</a></li>
        </ol>
        </section>
      </div>
    </div>
);
}

export default HeaderMenu;
