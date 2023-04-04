

import s from './style.module.scss'
import Logo from '../logo/logo'

function Footer(){
    return (
        <div className={s.footer}>
            <div className={s.footerContent}>
                <Logo title="Beyangin"/>
            <nav >
                <ol>
                    <li><a href="#">Term of Service</a></li>
                    <li><a href="#">Policy Service</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">@2023 Bayangin</a></li>
                </ol>
            </nav>
            
            </div>
            
            <nav></nav>
        </div>
    )
}

export default Footer