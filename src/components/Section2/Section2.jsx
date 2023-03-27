import s from './style.module.scss'
import SignHeader from '../SignHeader/SignHeader'
import SectionImageCross from '../SectionImageCross/SectionImageCross'
import image1 from '../../assets/img/portrait-femme-caucasienne.jpg'
import image2 from '../../assets/img/Old-man-character-design.png'
import image3 from '../../assets/img/robot-humanoide-feminin.jpg'
import image4 from '../../assets/img/roi-lion-armure-complete-arme.avif'
function Section2({title,subtitle}){

    return <div className={s.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <SignHeader signIn='Get Demo' logIn='Start Now'/>
        <SectionImageCross CrossImage1={image1}
                            CrossImage2={image2}
                            CrossImage3={image3}
                            CrossImage4={image4}/>    
        </div>
}


export default Section2