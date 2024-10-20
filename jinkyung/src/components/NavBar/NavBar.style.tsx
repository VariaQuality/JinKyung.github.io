import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface ImgProps { 
    src: any
    alt?: string
    width ?: number 
    height ?: number
    onclick ?: MouseEventHandler
}

const Container = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    height: 50px;
    background-color: white;
    align-items: center;
    z-index: 100;
    border-bottom: 1px solid #999999bb;
    
`
const Center = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    background-color:transparent;
    @media (max-width: 768px) {
    left: -15%;
    }
`
const H1 = styled.h1`
    font-size: 36px;
    @media (max-width: 768px) {
    font-size: 24px;
    }
`
const Img = styled.img`
    width:100px;
    position:relative;
    top:10px ;
    background-color:transparent;
`
const SubImg = styled.img`
    width:100px;
    position:absolute;
    right:3px ;
    background-color:transparent;
`

const Logo = ({src , width, height, onclick  }:ImgProps) => {
    return(
        <Img src={src} alt="logo" width={width} height={height} onClick={onclick}/>
    )
}

const Sub = ({src , width, height, onclick }:ImgProps) => {
    return(
        <SubImg src={src} alt="sub" width={width} height={height} onClick={onclick}/>
    )
}



export { Container, Logo, Sub, H1,Center }