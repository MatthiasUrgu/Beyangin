import s from './style.module.scss'

function ButtonGenearator(items){
    const buttons = Object.keys(items).map((key)=>
   <button className={s.button} key={key} type="button">{items[key]}</button> )

    return <div>{buttons}</div>;
        
       
     
    
}

export default ButtonGenearator;


/* function SignHeader({signIn,logIn}){
    return <div className={s.container}>
        <button type="button">{signIn}</button>
        <button type="button">{logIn}</button>
     
    </div>
} */