import CardYearly from "../CardYearly/CardYearly";
import s from "./style.module.scss";

function AllCardYearly() {
  return (
    <div className={s.cardContainer}>
      <div className={s.ticketItem}>
        <CardYearly
          title="Basic plan"
          price="$50"
          time="year"
          subtitle="Billed Yearly"
          puce1="7h fast generate"
          puce2="Limited generate (100/month)"
          puce3="Access to member gallery"
          puce4="Basic prompt learning library"
        />
      </div>

      <div className={s.ticketItem}>
        <CardYearly
          title="Standard plan"
          price="$150"
          time="year"
          subtitle="Billed Yearly"
          puce1="15h fast generate"
          puce2="Unlimeted relax generate"
          puce3="Access to member gallery"
          puce4="Standard prompt learning library"
        />
      </div>
      <div className={s.ticketItem}>
        <CardYearly
          title="Pro plan"
          price="$150"
          time="year"
          subtitle="Billed Yearly"
          puce1="30h fast generate"
          puce2="Unlimeted relax generate"
          puce3="Access to member gallery"
          puce4="Pro prompt learning library"
        />
      </div>
    </div>
  );
}

export default AllCardYearly;
