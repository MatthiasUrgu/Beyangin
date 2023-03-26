import s from "./style.module.scss";
function SectionImages({imageVetrical,horizontal,horrizontalSecondFirst,horrizontalSecondSecond,verticalSecond,subtitle}) {
  return (<div>
    
      <div className={s.container}>
        <div className={s.vertical}>
        <img className={s.hover} src={imageVetrical} alt=""/>
        </div>
        <div className={s.centerCol}>
          <div className={s.topCol}>
              <img className={s.hover} src={horizontal} alt=""/>
          </div>
          <div className={s.centerRow}>
              <div className={s.row1}>
                <img className={s.hover} src={horrizontalSecondFirst} alt=""/>
              </div>
              <div className={s.row2}>
               <img className={s.hover} src={horrizontalSecondSecond} alt=""/>
              </div>
          </div>
        </div>
        <div className={s.vertical}>
          <img className={s.hover} src={verticalSecond} alt=""/>
          </div>
  </div>
        <div className={s.tinyText}>
          {subtitle}
        </div>
    </div>
  );
}

export default SectionImages