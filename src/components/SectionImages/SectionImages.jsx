import s from "./style.module.scss";
function SectionImages({imageVetrical,horizontal,horrizontalSecondFirst,horrizontalSecondSecond,verticalSecond,subtitle}) {
  return (<div>
    
      <div className={s.container}>
        <div className={s.vertical}>
        <img src={imageVetrical} alt=""/>
        </div>
        <div className={s.centerCol}>
          <div className={s.topCol}>
              <img src={horizontal} alt=""/>
          </div>
          <div className={s.centerRow}>
              <div className={s.row1}>
                <img src={horrizontalSecondFirst} alt=""/>
              </div>
              <div className={s.row2}>
               <img src={horrizontalSecondSecond} alt=""/>
              </div>
          </div>
        </div>
        <div className={s.vertical}>
          <img src={verticalSecond} alt=""/>
          </div>
  </div>
        <div className={s.tinyText}>
          {subtitle}
        </div>
    </div>
  );
}

export default SectionImages