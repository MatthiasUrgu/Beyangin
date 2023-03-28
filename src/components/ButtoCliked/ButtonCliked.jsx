import s from "./style.module.scss";

function ButtonCliked() {
  return (
    <div className={s.container}>
      <div>
        
        <li className={s.bois} >Yearly</li>
        <li className={s.mange} >Monthly</li>
      </div>
    </div>
  );
}

export default ButtonCliked;
