import s from "./style.module.scss";
import Header from "./components/header/header";
import Section1 from "./components/section_1/section1";
import vignette from "../src/assets/img/vignette.jpg";
import SectionImages from "./components/SectionImages/SectionImages";
import SectionImages_1 from '../src/assets/img/arc-ciel.png'
import SectionImages_2 from '../src/assets/img/Old-man-character-design.png'
import SectionImages_3 from '../src/assets/img/fox.jpg'
import SectionImages_4 from '../src/assets/img/portrait-homme-afro-americain-feu.jpg'
import SectionImages_5 from '../src/assets/img/saluez-bataille.png'
import Banniere from "./components/Banniere/Banniere";
import Section2 from "./components/Section2/Section2";
function App() {
  return (
    <div>
      <div className={s.container}>
        <Header />

        <div className={s.section1}>
          <Section1 vignette={vignette} />
        </div>
        <SectionImages
          imageVetrical={SectionImages_1}
          horizontal={SectionImages_2}
          horrizontalSecondFirst={SectionImages_3}
          horrizontalSecondSecond={SectionImages_4}
          verticalSecond={SectionImages_5}subtitle='Art created by AI'
          />
      </div>
      <Banniere/>

    <Section2 title='Generative AI Image Made for You'      
              subtitle='With Beyangin you can create customuzed images 10x faster,wherever you worl online'/>

            
    </div>
  );
}

export default App;
