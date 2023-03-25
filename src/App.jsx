import s from "./style.module.css";
import Header from "./components/header/header";
import Section1 from "./components/section_1/section1";
import vignette from "../src/assets/img/fox.jpg";
import SectionImages from "./components/SectionImages/SectionImages";
function App() {
  return (
    <div>
      <div className={s.container}>
        <Header />

        <div className={s.section1}>
          <Section1 vignette={vignette} />
        </div>
        <SectionImages/>
      </div>
    </div>
  );
}

export default App;
