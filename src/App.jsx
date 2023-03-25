import s from './style.module.css'
import Header from "./components/header/header"
import Section1 from "./components/section_1/section1"
function App(){
    return <div>
        <div className={s.container}>
        <Header />
        
        <div className={s.section1}>
        <Section1/>
        </div>
        </div>
    </div>
}


export default App