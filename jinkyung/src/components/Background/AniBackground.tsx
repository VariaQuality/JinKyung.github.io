import styled from '@emotion/styled';
import GridPattern from "./BackgroundVec";

// Define a styled component using emotion
const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid;
  background-color: black;
  padding: 5rem;
  box-shadow: var(--md-shadow-xl);
  mask-image: radial-gradient(500px_circle_at_center, white, transparent);
  inset: 0;

  transform: skewY(12deg);
`;

export function AnimatedGridPattern() {
  return (
    <StyledDiv>
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
      />
    </StyledDiv>
  );
}
