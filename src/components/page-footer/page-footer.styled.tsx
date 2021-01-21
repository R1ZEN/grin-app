import styled from 'styled-components';
import { mixinFont144 } from '../core/mixins/font-mixins';

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
  ${mixinFont144};
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
  ${mixinFont144};
  color: #6554c0;
`;
