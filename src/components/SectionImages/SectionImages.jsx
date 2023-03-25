import s from "./style.module.scss";
function SectionImages() {
  return (
    <div className={s.container}>
      <div className={s.vertical}>vetical</div>
      <div className={s.centerCol}>
        <div className={s.topCol}>
            horizontal
        </div>
        <div className={s.centerRow}>
            <div className={s.row1}>
              A
            </div>
            <div className={s.row2}>B</div>
        </div>
      </div>
      <div className={s.vertical}>vetical</div>
    </div>
  );
}

export default SectionImages