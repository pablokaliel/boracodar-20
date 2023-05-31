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

import arrow from "../../assets/arrowdown.svg";

function Home() {
  return (
    <Container>
      <Swapper>

        <DivInfo>
          <h1>The - Abstract Gallery</h1>
          <img src={arrow} alt="seta para baixo apontando para direita"/>
        </DivInfo>

        <DivImages>
          <ColumnOne>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada a Floresta" loading="lazy" src="https://source.unsplash.com/random/?forest" /></a>
              <CaptionImage>Image the florest</CaptionImage>
            </DivImg>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada a Cidade a noite" loading="lazy" src="https://source.unsplash.com/random/?city,night" /></a>
              <CaptionImage>Image The Night City</CaptionImage>
            </DivImg>
            <DivImgFull>
              <a href="#!"><ImageFullWidth alt="Imagem Aleatoria relacionada a abstrato" loading="lazy" src="https://source.unsplash.com/random/?abstract" /></a>
              <CaptionImage>Image Abstract</CaptionImage>
            </DivImgFull>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <a href="#!"><ImageOne alt="Imagem Aleatoria relacionada ao universo" loading="lazy" src="https://source.unsplash.com/random/?universe" /></a>
              <CaptionImage>Image The Universe</CaptionImage>
            </DivImg>
          </DivImgOne>

          <ColumnOne>
            <DivImgFullEnd>
              <a href="#!"><ImageFullWidth alt="Imagem Aleatoria relacionada ao ceu" loading="lazy" src="https://source.unsplash.com/random/?sky" /></a>
              <CaptionImage> Sky Image</CaptionImage>
            </DivImgFullEnd>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada a planetas " loading="lazy" src="https://source.unsplash.com/random/?planet" /></a>
              <CaptionImage>Image Of Planets</CaptionImage>
            </DivImg>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada ao sol" loading="lazy" src="https://source.unsplash.com/random/?sun" /></a>
              <CaptionImage>Sun Image </CaptionImage>
            </DivImg>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <a href="#!"><ImageOne alt="Imagem Aleatoria relacionada a gelo" loading="lazy" src="https://source.unsplash.com/random/?ice" /></a>
              <CaptionImage>Ice Image</CaptionImage>
            </DivImg>
          </DivImgOne>

          <ColumnOne>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada a àgua" loading="lazy" src="https://source.unsplash.com/random/?water" /></a>
              <CaptionImage>Water Image</CaptionImage>
            </DivImg>
            <DivImg>
              <a href="#!"><ImageHalfWidth alt="Imagem Aleatoria relacionada a natureza" loading="lazy" src="https://source.unsplash.com/random/?nature" /></a>
              <CaptionImage>Nature Image</CaptionImage>
            </DivImg>
            <DivImgFull>
              <a href="#!"><ImageFullWidth alt="Imagem Aleatoria relacionada a dia" loading="lazy" src="https://source.unsplash.com/random/?day" /></a>
              <CaptionImage>Day Image</CaptionImage>
            </DivImgFull>
          </ColumnOne>

          <DivImgOne>
            <DivImg>
              <a href="#!"><ImageOne alt="Imagem Aleatoria relacionada a noite" loading="lazy" src="https://source.unsplash.com/random/?night" /></a>
              <CaptionImage>Night Image</CaptionImage>
            </DivImg>
          </DivImgOne>
        </DivImages>
      </Swapper>
    </Container>
  );
}

export default Home;
