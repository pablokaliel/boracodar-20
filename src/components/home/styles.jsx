import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Swapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-between;

  padding: 140px 100px 0px 111px;
  overflow: auto;

  @media (max-width: 770px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 1075px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 770px) {
    width: 100%;
    position: static;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
    }
  }
`;

export const DivImages = styled.div`
  width: 800px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 770px) {
    padding: 0px;
    width: 100%;
  }
`;

export const ColumnOne = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;

  grid-template-rows: 300px 300px 400px; // Define 3 linhas com altura igual

  .one {
    grid-row: 1 / 3; // Estende a imagem por duas linhas
    aspect-ratio: 9/16;
  }

  .three {
    grid-row: 1 / 3; // Estende a imagem por duas linhas
    grid-column: 2;
    aspect-ratio: 9/16;
  }

  .model-1 {
    aspect-ratio: 1/1;
    display: grid;
  }

  .model-2 {
    display: grid;
    grid-template-rows: repeat(3, 300px); // Define 3 linhas com altura igual
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr; // Altera para uma única coluna
    grid-template-rows: auto; // Redefine a altura das linhas

    .one,
    .three {
      grid-row: auto; // Redefine a posição da imagem nas linhas
      grid-column: auto; // Redefine a posição da imagem nas colunas
      aspect-ratio: unset; // Remove a proporção de aspecto definida
    }
  }
`;

export const DivImg = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: all 0.5s ease-in;
  &:hover {
    border: 3px solid white;
    filter: grayscale(0%);
  }

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
    filter: grayscale(0%);
  }
`;

export const DivImgOne = styled.div`
  position: relative;
  grid-column: 1/3;
  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
    grid-column:1;
    gap:16px;
  }
`;
export const DivImgFull = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  filter: grayscale(100%);

  transition: all 0.5s ease-in;

  @media (max-width: 780px) {
    filter: grayscale(0%);
    width: 100%;
    max-width: 100%;
  }
  border-radius: 8px;
  &:hover {
    border: 3px solid white;
    filter: grayscale(0%);
  }
`;
export const DivImgFullEnd = styled(DivImgFull)`
  justify-self: end;

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
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
  transition: visibility 700ms, opacity 700ms ease-in-out;

  ${DivImg}:hover & {
    visibility: visible;
    opacity: 1;
    animation: ${slideUp} 700ms forwards;
  }

  ${DivImgFull}:hover & {
    visibility: visible;
    opacity: 1;
    animation: ${slideUp} 700ms forwards;
  }

  ${DivImg}:not(:hover) & {
    animation: ${slideDown} 700ms forwards;
  }

  ${DivImgFull}:not(:hover) & {
    animation: ${slideDown} 700ms forwards;
  }
`;

export const ImageFullWidth = styled.img`
  width: 100%;
  height: 100%;
  transition: 700ms ease-in-out;
  max-width: 100%;

  &:hover {
    transform: scale(1.9);
  }
  object-fit: cover;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const ImageHalfWidth = styled.img`
  height: 100%;
  width: 100%;
  transition: 700ms ease-in-out;
  max-width: 100%;

  &:hover {
    transform: scale(1.9);
  }
  object-fit: cover;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
export const ImageOne = styled.img`
  width: 100%;
  height: 100%;
  transition: 700ms ease-in-out;
  max-width: 100%;

  &:hover {
    transform: scale(1.9);
  }
  object-fit: cover;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
