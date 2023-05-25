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
  height: 100vh; /* Adicionado para definir uma altura */

  display: flex;
  justify-content: space-between;

  padding: 140px 100px 0px 111px;
  overflow: auto; /* Adicionado para habilitar a rolagem caso o conteúdo exceda a altura */

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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const DivImg = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  &:hover {
    border: 3px solid white; /* Adicionado para aplicar a borda */
  }

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const DivImgOne = styled.div`
  position: relative;
  height: 100%;

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const DivImgFull = styled.div`
  grid-row: 1 / 3;
  position: relative;
  justify-self: start;
  overflow: hidden;

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
  border-radius: 8px;
  &:hover {
    border: 3px solid white; /* Adicionado para aplicar a borda */
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
`;

export const ImageHalfWidth = styled.img`
  height: 100%;
  width: 400px;
  transition: 700ms ease-in-out;
  max-width: 100%;

  &:hover {
    transform: scale(1.9);
  }
  object-fit: cover;
`;
export const ImageOne = styled.img`
  width: 100%;
  height: 400px;
  transition: 700ms ease-in-out;
  max-width: 100%;

  &:hover {
    transform: scale(1.9);
  }
  object-fit: cover;
`;
