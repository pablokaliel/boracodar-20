import {
  Container,
  Swapper,
  DivInfo,
  DivImages,
  ColumnOne,
  ImageFullWidth,
  ImageHalfWidth,
  ImageOne,
  DivImgOne,
  DivImg,
  DivImgFull,
  DivImgFullEnd,
  CaptionImage,
} from "./styles";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/arteabstrata.jpg";
import img10 from "../../assets/pinturaamarelo.jpeg";
import img11 from "../../assets/arteabstrata3.jpg";
import img12 from "../../assets/arte-manchas.jpg";

import arrow from "../../assets/arrowdown.svg";

function Home() {
  return (
    <Container>
      <Swapper>

        <DivInfo>
          <h1>The - Abstract Gallery</h1>
          <img src={arrow} />
        </DivInfo>

        <DivImages>

          <ColumnOne>
            <DivImg>
              <ImageHalfWidth src={img1} />
              <CaptionImage>ON WHITE II (1923)</CaptionImage>
            </DivImg>
            <DivImg>
              <ImageHalfWidth src={img2} />
              <CaptionImage>TABLEAU I (1921)</CaptionImage>
            </DivImg>
            <DivImgFull>
              <ImageFullWidth src={img3} />
              <CaptionImage>SUPREMATISMO (1915)</CaptionImage>
            </DivImgFull>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <ImageOne src={img8} />
              <CaptionImage>SENECIO (1922)</CaptionImage>
            </DivImg>
          </DivImgOne>

          <ColumnOne>
            <DivImgFullEnd>
              <ImageFullWidth src={img5} />
              <CaptionImage> BLUE AND GREEN MUSIC (1919-1921)</CaptionImage>
            </DivImgFullEnd>
            <DivImg>
              <ImageHalfWidth src={img4} />
              <CaptionImage>THE FLAME – 1938 –</CaptionImage>
            </DivImg>
            <DivImg>
              <ImageHalfWidth src={img6} />
              <CaptionImage>APRÈS SEURAT (1988) </CaptionImage>
            </DivImg>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <ImageOne src={img7} />
              <CaptionImage>MANABU MABE(1997)</CaptionImage>
            </DivImg>
          </DivImgOne>

          <ColumnOne>
            <DivImg>
              <ImageHalfWidth src={img9} />
              <CaptionImage>Insula Dulcamara</CaptionImage>
            </DivImg>
            <DivImg>
              <ImageHalfWidth src={img10} />
              <CaptionImage>Bottle of Rum and Newspaper</CaptionImage>
            </DivImg>
            <DivImgFull>
              <ImageFullWidth src={img11} />
              <CaptionImage> Black in deep red</CaptionImage>
            </DivImgFull>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <ImageOne src={img12} />
              <CaptionImage>Concetto spaziale 'Attesa'</CaptionImage>
            </DivImg>
          </DivImgOne>

        </DivImages>
      </Swapper>
    </Container>
  );
}

export default Home;
