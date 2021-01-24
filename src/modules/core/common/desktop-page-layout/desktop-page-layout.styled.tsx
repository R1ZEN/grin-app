import styled from 'styled-components';

export const PageLayoutWrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 1440px;

  min-height: 100vh;
  height: 100%;

  margin: 0 auto;
  background: #fff;
`;
