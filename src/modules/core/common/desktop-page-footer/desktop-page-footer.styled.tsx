import styled from 'styled-components';
import { mixinFont144 } from '../../mixins/font-mixins';
import { DesktopPageContentContainer } from '../desktop-page-content-container/desktop-page-content-container';

export const PageFooterWrapper = styled.footer`
  border-top: 1px solid #d8d8d8;
  background: #fff;
`;

export const PageFooterInner = styled(DesktopPageContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 30px;
  padding-bottom: 30px;
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
