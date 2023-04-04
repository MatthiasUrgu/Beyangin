import s from "./style.module.scss";
function HeaderMenu({ list1, list2, list3, list4 }) {
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

        <button className={s.hamburgerButton}>
            <span className={s.hamburgerHide}></span>
            <span className={s.hamburgerHide}></span>
            <span className={s.hamburgerHide}></span>
            
        </button>
      </div>
    </div>
  );
}

export default HeaderMenu;
