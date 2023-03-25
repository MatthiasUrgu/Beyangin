import s from './style.module.scss'

function Section1({vignette}){
    return <div className={s.container}>
        <div className={s.firstRow}>
            <h1>GENERATE YOUR IDEAS INTO</h1>
            <img className={s.vignette} src={vignette} alt="vignette" />
        </div>
        <div className={s.secondRow}>
            <h1>STUNNING VISUALS</h1>
            <p>Introducing Beyangin, the Generative AI image for brings your ideas to lide with perfectly matched and unique visuals</p>
        </div>
    </div>
}

export default Section1