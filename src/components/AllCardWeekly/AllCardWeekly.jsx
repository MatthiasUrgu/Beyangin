import Card from "../Card/Card";
import s from "./style.module.scss";

function AllCardWeekly() {
  return (
    <div className={s.cardContainer}>
      <div className={s.ticketItem}>
        <Card
          title="Basic plan"
          price="$5.88"
          time="month"
          subtitle="Billed Monthly"
          puce1="7h fast generate"
          puce2="Limited generate (100/month)"
          puce3="Access to member gallery"
          puce4="Basic prompt learning library"
        />
      </div>

      <div className={s.ticketItem}>
        <Card
          title="Standard plan"
          price="$9.99"
          time="month"
          subtitle="Billed Monthly"
          puce1="15h fast generate"
          puce2="Unlimeted relax generate"
          puce3="Access to member gallery"
          puce4="Standard prompt learning library"
        />
      </div>
      <div className={s.ticketItem}>
        <Card
          title="Pro plan"
          price="$15.99"
          time="month"
          subtitle="Billed Monthly"
          puce1="30h fast generate"
          puce2="Unlimeted relax generate"
          puce3="Access to member gallery"
          puce4="Pro prompt learning library"
        />
      </div>
    </div>
  );
}

export default AllCardWeekly;
