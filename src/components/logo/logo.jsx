import s from './style.module.scss'
import { HiPuzzle } from "react-icons/hi";


function Logo({title}){
    return <div className={s.container}>
        <div className={s.puzzle}><HiPuzzle/></div>
        <div className={s.title}>  <a href="home">{title}</a></div>
       
    </div>
}

export default Logo