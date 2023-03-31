import s from "./style.module.scss";
function CardYearly() {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardOrange}>
        <div className={s.content}>fff</div>
      </div>
      <div className={s.cardButton}>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CardYearly;
