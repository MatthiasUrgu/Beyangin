import s from './button.module.scss'
import { FaGooglePlay } from "react-icons/fa";


function SearchButton(){
    return <div className={s.container}>
    <button ><FaGooglePlay/></button>
    </div>
}

export default SearchButton;