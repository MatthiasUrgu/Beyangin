import s from "./style.module.scss";

import SearchBar from "../SearchBar/SearchBar";

function SectionImageCross({CrossImage1,CrossImage2,CrossImage3,CrossImage4,
}) {
  return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <div className={s.firstRow}>
          <div>
            <img className={s.img} src={CrossImage1} alt="CrossImage1" />
          </div>
          <div>
            <img className={s.img} src={CrossImage2} alt="CrossImage2" />
          </div>
        </div>
        <div className={s.secondRow}>
          <div>
            <img className={s.img} src={CrossImage3} alt="CrossImage3" />
          </div>
          <div>
            <img className={s.img} src={CrossImage4} alt="CrossImage4" />
          </div>
        </div>
      </div>
      <div className={s.search}>
        <SearchBar />
      </div>
    </div>
  );
}

export default SectionImageCross;
