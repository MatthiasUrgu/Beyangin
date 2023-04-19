import s from "./style.module.scss";
import Header from "./components/header/header";
import Section1 from "./components/section_1/section1";
import vignette from "../src/assets/img/vignette.jpg";
import SectionImages from "./components/SectionImages/SectionImages";
import SectionImages_1 from "../src/assets/img/arc-ciel.png";
import SectionImages_2 from "../src/assets/img/Old-man-character-design.png";
import SectionImages_3 from "../src/assets/img/fox.jpg";
import SectionImages_4 from "../src/assets/img/portrait-homme-afro-americain-feu.jpg";
import SectionImages_5 from "../src/assets/img/saluez-bataille.png";
import Banniere from "./components/Banniere/Banniere";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import SectionImageCross from "./components/SectionImageCross/SectionImageCross";
import image1 from "./assets/img/portrait-femme-caucasienne.jpg";
import image2 from "./assets/img/Old-man-character-design.png";
import image3 from "./assets/img/robot-humanoide-feminin.jpg";
import image4 from "./assets/img/roi-lion-armure-complete-arme.avif";
import ButtonGenearator from "./components/ButtonGenearator/ButtonGenearator";
import TwoImage from "./components/TwoImage/TwoImage";
import item from "./assets/img/fantastique-epic.avif";
import items from "./assets/img/alien-dans-illustration-foret.jpg";
import CardItems from "./components/CardItems/CardItems";
import ButtonCliked from "./components/ButtoCliked/ButtonCliked";
import Accordeon from "./components/Accordeon/Accordeon";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={s.body}>
      <div className={s.container}>
        <Header />

        <div className={s.section1}>
          <Section1
            title="GENERATE YOUR IDEAS INTO"
            vignette={vignette}
            twoTitle="STUNNING VISUALS"
            paragraphe="Introducing Beyangin, the Generative AI image for brings your ideas
            to lide with perfectly matched and unique visuals."
          />
        </div>
        <SectionImages
          imageVetrical={SectionImages_1}
          horizontal={SectionImages_2}
          horrizontalSecondFirst={SectionImages_3}
          horrizontalSecondSecond={SectionImages_4}
          verticalSecond={SectionImages_5}
          subtitle="Art created by AIIII"
        />
      </div>
      <Banniere />
      <div className={s.container}>
        <div className={s.section}>
          <SectionTitle
            title="Generative AI Image Made for You"
            subtitle="With Beyangin you can create customuzed images 10x faster,wherever you worl online."
          />
          <ButtonGenearator demo="Get Demo" start="Start Now" />
          <SectionImageCross
            CrossImage1={image1}
            CrossImage2={image2}
            CrossImage3={image3}
            CrossImage4={image4}
          />
          <SectionTitle
            title="Explore the Best Generative Images"
            subtitle="We take pride in the work created on our platform,which is why we showcase the top daily generatice images for you to discover and we inspired by."
          />
          <div className={s.buttonGenerator}>
            <ButtonGenearator
              TopMonth="Top Monthly"
              TopWeekly="Top Weekly"
              TopDay="Top Daily"
            />
          </div>
        </div>
        <div className={s.sectionImages}>
          <SectionImages
            imageVetrical={SectionImages_1}
            horizontal={SectionImages_2}
            horrizontalSecondFirst={SectionImages_3}
            horrizontalSecondSecond={SectionImages_4}
            verticalSecond={SectionImages_5}
          />
        </div>
        {/* Amélioration ajouter a SectionImage et display:none
        au responsive */}
        <div className={s.twoImages}>
          <TwoImage item={item} items={items} />
        </div>

        <SectionTitle
          title="Bring Your Ideas with Your Prompts"
          subtitle="Discover how to create visually unique, high-fIdelity, and precise prompts to your ideas using Bayangin's extensive library of resources."
        />
        <ButtonGenearator />

        <div className={s.cardItems}>
          <div className={`${s.cardItem} ${s.cardItem1}`}>
            <CardItems
              title="Introduction to Generative AI Image: Understanding the Basics"
              subtitle="You will lean the fundamental concept behind generative AI image technology and how it works."
              button="Learn more"
              CrossImage1={image1}
              CrossImage2={image2}
              CrossImage3={image3}
              CrossImage4={image4}
            />
          </div>
          <div className={`${s.cardItem} ${s.cardItem2}`}>
            <CardItems
              title="Introduction to Generative AI Image: Understanding the Basics"
              subtitle="You will lean the fundamental concept behind generative AI image technology and how it works."
              button="Learn more"
              CrossImage1={image1}
              CrossImage2={image2}
              CrossImage3={image3}
              CrossImage4={image4}
            />
          </div>
          <div className={`${s.cardItem} ${s.cardItem3}`}>
            <CardItems
              title="Introduction to Generative AI Image: Understanding the Basics"
              subtitle="You will lean the fundamental concept behind generative AI image technology and how it works."
              button="Learn more"
              CrossImage1={image1}
              CrossImage2={image2}
              CrossImage3={image3}
              CrossImage4={image4}
            />
          </div>
        </div>
        <SectionTitle
          title="Purchase Subscription"
          subtitle="Choose the path plan that works for you."
        />

        <ButtonCliked />

        <SectionTitle
          title="FAQ"
          subtitle="Frequently Asked Questions about Bayangin."
        />
        <Accordeon title="fefefe" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
