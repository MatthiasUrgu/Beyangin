import s from "./style.module.scss";

function Section1({ title,twoTitle,vignette,paragraphe }) {
  return (
    <div className={s.container}>
      <div className={s.firstRow}>
        <h1>{title}</h1>
        <div className={s.vignette}>
          <img src={vignette} alt="vignette" />
        </div>
      </div>
      <div className={s.secondRow}>
        <h1 className={s.secondTitle}>{twoTitle}</h1>
        <div className={s.little}>
          <p className={s.littleText}>
            {paragraphe}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
