import CardYearly from "../CardYearly/CardYearly";
import s from './style.module.scss'

function AllCardYearly(){
    return (
    <div className={s.cardContainer}>
        <CardYearly title='Basic plan'
                    price="$50"
                    time='year'
                    subtitle='Billed Yearly'
                    puce1='7h fast generate'
                    puce2='Limited generate (100/month)'
                    puce3='Access to member gallery'
                    puce4='Basic prompt learning library'/>

        <CardYearly title='Standard plan'
                    price="$150"
                    time='year'
                    subtitle='Billed Yearly'
                    puce1='15h fast generate'
                    puce2='Unlimeted relax generate'
                    puce3='Access to member gallery'
                    puce4='Standard prompt learning library'/>

        <CardYearly title='Pro plan'
                    price="$150"
                    time='year'
                    subtitle='Billed Yearly'
                    puce1='30h fast generate'
                    puce2='Unlimeted relax generate'
                    puce3='Access to member gallery'
                    puce4='Pro prompt learning library'/>

        
    </div>
    )
}

export default AllCardYearly;