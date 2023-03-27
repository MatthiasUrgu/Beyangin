import s from './style.module.scss'
function TwoImage({item,items}){
    return <div className={s.TwoImg}>
    <img src={item} alt="image1" />
    <img src={items}alt="image2" />
  </div>
}

export default TwoImage