import s from "./style.module.scss";
import Logo from "../logo/logo";
import HeaderMenu from "../header-menu/header-menu";
import ButtonGenearator from "../ButtonGenearator/ButtonGenearator";
function Header() {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo title="Beyangin" />
      </div>
      <div className={s.menu}>
        <HeaderMenu
          list1="Home"
          list2="About"
          list3="Library"
          list4="Contact" />
      </div>

      <div className={s.logIn}>
        <ButtonGenearator signIn='Sign Up' logIn='Log In'/>
      </div>
    </div>
  );
}

export default Header;
