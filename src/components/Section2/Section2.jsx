import s from './style.module.scss'
import SignHeader from '../SignHeader/SignHeader'
function Section2({title,subtitle}){
    
    return <div className={s.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <SignHeader signIn='GetDemo' logIn='Start Now'/>
    </div>
}


export default Section2