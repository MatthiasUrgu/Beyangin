import s from "./style.module.scss";
function SectionImages({imageVetrical,horizontal,horrizontalSecondFirst,horrizontalSecondSecond,verticalSecond,subtitle}) {
  return (<div>
    
      <div className={s.imgContainer}>
        <div className={s.vertical}>
        <img  src={imageVetrical} alt="paysage"/>
        </div>
        <div className={s.centerCol}>
          <div className={s.topCol}>
              <img  src={horizontal} alt="sorcier"/>
          </div>
          <div className={s.centerRow}>
              <div className={s.row1}>
                <img  src={horrizontalSecondFirst} alt="renard"/>
              </div>
              <div className={s.row2}>
               <img  src={horrizontalSecondSecond} alt="flamme"/>
              </div>
          </div>
        </div>
        <div className={s.vertical}>
          <img className={s.dragon} src={verticalSecond} alt="dragon"/>
        </div>
  </div>
        <div className={s.tinyText}>
          {subtitle}
        </div>
    </div>
  );
}

export default SectionImages