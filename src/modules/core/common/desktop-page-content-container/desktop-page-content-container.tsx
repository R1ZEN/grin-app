import styled from 'styled-components';

export const DesktopPageContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 69.2rem;
  padding-left: 3.8rem;
  padding-right: 3.8rem;

  @media screen and (min-width: 768px) {
    max-width: 91.2rem;
    padding-left: 5.6rem;
    padding-right: 5.6rem;
  }
  
  @media screen and (min-width: 1024px) {
    max-width: 116rem;
    padding-left: 12rem;
    padding-right: 12rem;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 116rem;
    padding-left: 14rem;
    padding-right: 14rem;
  }
`;