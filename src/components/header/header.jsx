import s from "./style.module.scss";
import Logo from "../logo/logo";
import HeaderMenu from "../header-menu/header-menu";
import SignHeader from "../SignHeader/SignHeader";
function Header() {
  return (
    <div className={s.container}>
      <Logo title="Beyangin" />
      <HeaderMenu 
        list1="Home" 
        list2="About" 
        list3="Library" 
        list4="Contact" />

      <SignHeader signIn='Sign Up' logIn='Log In'/>
    </div>
  );
}

export default Header;
