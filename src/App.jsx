import s from "./style.module.css";
import Header from "./components/header/header";
import Section1 from "./components/section_1/section1";
import vignette from "../src/assets/img/vignette.jpg";
import SectionImages from "./components/SectionImages/SectionImages";
import SectionImages_1 from '../src/assets/img/arc-ciel.avif'
import SectionImages_2 from '../src/assets/img/Old-man-character-design.webp'
import SectionImages_3 from '../src/assets/img/fox.jpg'
import SectionImages_4 from '../src/assets/img/portrait-homme-afro-americain-feu.jpg'
import SectionImages_5 from '../src/assets/img/saluez-bataille.avif'
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

      
    </div>
  );
}

export default App;
