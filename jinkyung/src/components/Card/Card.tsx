import React from 'react'
import * as S from './Card.style'


function GridItem({ icon, mainText, text, imgWidth, width, height, colSpan, children }: { imgWidth: string, colSpan: string, icon?: any, mainText: string, text: string, width?: number, height?: number, children?: React.ReactNode }) {
  return (
    <S.GridItemContainer colSpan={colSpan}>
      <S.Background>
        <S.ImageContainer imgWidth={imgWidth}>
          {icon && (
            <S.Img
              alt=""
              src={icon}
              width={width}
              height={height}
            />
          )}
        </S.ImageContainer>
      </S.Background>
      <S.Content>
        <S.MainText>{mainText}</S.MainText>
        <S.SubText>{text}</S.SubText>
        <h2>{children}</h2>
        
      </S.Content>
    </S.GridItemContainer>
  );
}

export default GridItem