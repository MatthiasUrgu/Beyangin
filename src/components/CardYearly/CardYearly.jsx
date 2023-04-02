import s from "./style.module.scss";
import { AiOutlineCheckCircle } from 'react-icons/ai';

function CardYearly({title,price,time,subtitle,puce1,puce2,puce3,puce4}) {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardOrange}>
        <div className={s.content}>
         <h2>{title}</h2>
          <div className={s.priceContent}>
            <p className={s.price}> {price} </p>
            <p className={s.priceTime}>/ {time}</p>
          </div>
            <p className={s.subtitle}> {subtitle} </p>
            <span className={s.line}>{/* Ligne horizontal */}</span>
            
          <div className={s.list}>
            <p><AiOutlineCheckCircle/> <span className={s.puce}>{puce1}</span>  </p>
            <p><AiOutlineCheckCircle/> <span className={s.puce}>{puce2}</span>  </p>
            <p><AiOutlineCheckCircle/> <span className={s.puce}>{puce3}</span>  </p>
            <p><AiOutlineCheckCircle/> <span className={s.puce}>{puce4}</span>  </p>

          </div>
          
          
        </div>
        <div className={s.buttonContainer}>
          <button className={s.cardButton}>Submit</button>
        </div>
        
      </div>
     
      
    </div>
  );
}

export default CardYearly;
