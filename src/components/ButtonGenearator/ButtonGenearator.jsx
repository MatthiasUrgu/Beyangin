import s from './style.module.scss'

function ButtonGenearator(items){
    const buttons = Object.keys(items).map((key)=>
   <button className={s.buttonClick} key={key} type="button">{items[key]}</button> )

    return <div>{buttons}</div>;
        
       
     
    
}

export default ButtonGenearator;


