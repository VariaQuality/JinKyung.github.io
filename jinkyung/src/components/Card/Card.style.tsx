import styled from "@emotion/styled";


const GridItemContainer = styled.div<{ colSpan: string }>`
  border: 2px solid;
  border-color: var(--primary-700);
  border-left-width: 17px;
  border-radius: 24px;
  overflow: hidden;
  width: 95%;
  position: relative;
  grid-column: span ${({ colSpan }) => colSpan};
`;

const ImageContainer = styled.div<{ imgWidth: string }>`
  position: absolute;
  bottom: 0;
  top: 8px;
  left:5%;
  z-index: 10;
  margin: 0 8px;
  margin-bottom: -40px;
  width: ${({ imgWidth }) => imgWidth};
  left: 32px;
`;

const Background = styled.div`
  position: relative;
  height: 276px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  transition-duration: 500ms;
  border-radius: 3xl;
  background: radial-gradient(121.58% 100% at 276px 170px, #8690a6 0%, #d5d5d6 100%);
`;

const Content = styled.div`
  border-top: 2px dashed;
  border-color: var(--primary-700);
  display: flex;
  flex-direction: column;
  min-height: 200px;
  justify-content: space-between;
  padding: 5px 8px;
  padding-bottom: 8px;
  padding-top: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4px;
    padding: 5px 8px;
    padding-bottom: 10px;
  }
`;

const MainText = styled.span`
  font-size: 700w;
  padding-top: 1px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const SubText = styled.span`
  max-width: 350px;
  font-size: base;
  @media (min-width: 768px) {
    text-align: start;
    line-height: snug;
  }
`;

const Img = styled.img`
  border-radius: 24px;
  font-weight: 700;
`
export { GridItemContainer,ImageContainer,Background,Content,MainText, SubText, Img }