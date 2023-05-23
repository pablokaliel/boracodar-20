import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Swapper = styled.div`
  height: 100vh; /* Adicionado para definir uma altura */

  display: flex;
  justify-content: space-between;

  padding: 140px 100px 0px 111px;
  overflow: auto; /* Adicionado para habilitar a rolagem caso o conteúdo exceda a altura */
`;

export const DivInfo = styled.header`
  width: 380px;

  position: sticky;
  top: 0px;

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;
  }
`;

export const DivImages = styled.div`
  width: 800px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px;
`;

export const ColumnOne = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
`;

export const DivImg = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  &:hover {
    border: 3px solid white; /* Adicionado para aplicar a borda */
  }
`;

export const DivImgOne = styled.div`
  position: relative;
  height: 100%;
`;
export const DivImgFull = styled.div`
  grid-row: 1 / 3;
  position: relative;
  justify-self: start;
  overflow: hidden;

  &:hover {
    border: 3px solid white; /* Adicionado para aplicar a borda */
  }
`;
export const DivImgFullEnd = styled(DivImgFull)`
  justify-self: end;
`;

export const CaptionImage = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 8px;

  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-size: 14px;
  text-align: center;

  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transition: visibility 700ms, opacity 700ms ease-in-out;

  ${DivImg}:hover & {
    visibility: visible;
    opacity: 1;
  }

  ${DivImgFull}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const ImageFullWidth = styled.img`
  width: 100%;
  height: 100%;
  transition: 700ms ease-in-out;

  &:hover {
    transform: scale(1.9);
  }
`;

export const ImageHalfWidth = styled.img`
  height: 100%;
  width: 100%;
  transition: 700ms ease-in-out;

  &:hover {
    transform: scale(1.9);
  }
`;
export const ImageOne = styled.img`
  width: 100%;
  height: 400px;
  transition: 700ms ease-in-out;

  &:hover {
    transform: scale(1.9);
  }
`;
