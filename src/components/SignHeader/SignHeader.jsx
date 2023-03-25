import s from './style.module.scss'

function SignHeader({signIn,logIn}){
    return <div className={s.container}>
        <button type="button">{signIn}</button>
        <button type="button">{logIn}</button>
       
    </div>
}

export default SignHeader;