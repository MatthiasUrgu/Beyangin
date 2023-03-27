import s from './style.module.scss'


function SectionTitle({title,subtitle}){

    return <div className={s.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        
        </div>
        
}


export default SectionTitle