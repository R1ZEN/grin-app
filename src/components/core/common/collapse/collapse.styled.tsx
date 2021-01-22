import styled, { keyframes } from 'styled-components';

const contentFadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  
  100% {
    opacity: 1;
    height: 100%;
  }
`;

export const DetailsSummary = styled.summary`
  outline: none;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const DetailsContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const Details = styled.details`
  width: 100%;
  height: 100%;

  &[open] ${DetailsContent} {
    animation: ${contentFadeIn};
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }
`;
