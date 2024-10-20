"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import styled from '@emotion/styled';

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  
  gap: 0.25rem; /* Tailwind's space-x-1 translates to 0.25rem */
`;

const StyledChar = styled(motion.h1)`
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  background-color: transparent;
`;

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <StyledContainer className={className}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <StyledChar
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </StyledChar>
        ))}
      </AnimatePresence>
    </StyledContainer>
  );
}