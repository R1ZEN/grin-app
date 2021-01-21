import styled from 'styled-components';

export const PageFooterWrapper = styled.footer`
  margin-top: auto;
  
  border-top: 1px solid #d8d8d8;
`;

export const PageFooterInner = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  // TODO: Refactor this after define grid
  width: 800px;
  margin: 0 auto;
`;

export const PageFooterTitle = styled.strong`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const PageFooterList = styled.ul`
  display: flex;
`;

export const FooterListItem = styled.li`
  padding: 1.8em 0;

  &:not(:first-of-type) {
    margin-left: 4em;
  }
`;

export const FooterLink = styled.a`
  color: #6554c0;
  font-size: 1.4rem;
`;
