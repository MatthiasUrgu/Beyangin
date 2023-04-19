import s from "./style.module.scss";
import { AiFillStar } from "react-icons/ai";

function Banniere() {
  return (
    <div className={s.container}>
      <div className={s.marquee}>
        <ul className={s.marqueeContent}>
          <li>
            <AiFillStar /> Beyangin
          </li>
          <li>
            <AiFillStar /> Beyangin
          </li>
          <li>
            <AiFillStar /> Beyangin
          </li>
        </ul>

        <ul className={s.marqueeContent} aria-hidden="true">
          <li>
            <AiFillStar /> Beyangin
          </li>
          <li>
            <AiFillStar /> Beyangin
          </li>
          <li>
            <AiFillStar /> Beyangin
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banniere;
