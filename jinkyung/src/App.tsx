

import './App.css'
import NavBar from './components/NavBar/NavBar'
import { AnimatedGridPattern } from './components/Background/AniBackground'
import styled from '@emotion/styled'
import GridItem from './components/Card/Card'
import GradualSpacing from './components/ui/LandingText'
import School from './assets/school.png'
import Avatar from './assets/profile.jpg'
const StyledGridContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 2rem; /* Tailwind's gap-y-8 translates to 2rem */
  
  @media (min-width: 768px) { /* md breakpoint */
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(6, minmax(0, 1fr)); /* md:grid-cols-6 */
    column-gap: 1.5rem; /* md:gap-x-6 translates to 1.5rem */
  }
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`
const Landing = styled.div`
  width: 100%;
  height: 90vh;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
const MobileGradualSpacing = styled(GradualSpacing)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 12px; 

  }
`;
const DesktopGradualSpacing = styled(GradualSpacing)`
  display: flex;
  font-size: 36px;
  @media (max-width: 768px) {
    display: none;

  }
`;
function App() {
  return (
    <>
    <AnimatedGridPattern/>
    <NavBar/>
    <Landing>
      <DesktopGradualSpacing
      text="정신을 한곳으로 모으면"
      />
      <DesktopGradualSpacing
        text="안되는 것이 없다."
      />
      <DesktopGradualSpacing
        text="精神一到何事不成"
      />
      <MobileGradualSpacing
        text="정신을"
      />
      <MobileGradualSpacing
      text="한곳으로 모으면"
      />
      <MobileGradualSpacing
        text="안되는 것이 없다."
      />
      <MobileGradualSpacing
        text="精神一到何事不成"
      />
    </Landing>
    
    <Main>
      <StyledGridContainer>
      <GridItem imgWidth="450px" icon={Avatar} colSpan="2"  width={350} height={300} mainText="안진경" text="" >2002.07.02</GridItem>
      <GridItem imgWidth="800px" icon={School} colSpan="4"  width={800} height={305} mainText="상명대학교" text="">휴먼 지능 정보공학과 2학년</GridItem>
      <GridItem imgWidth="500px" colSpan="6" width={300} height={205} mainText="이력" text="없음" />
      </StyledGridContainer>
    </Main>
    
    </>
      
      
  )
}

export default App
