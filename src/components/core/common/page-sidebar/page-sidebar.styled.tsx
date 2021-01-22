import styled, { css, keyframes } from 'styled-components';
import { mixinFont144, mixinFont167 } from '../../mixins/font-mixins';

const sidebarAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`

export const TopicSidebarWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  height: 100%;
  
  ${(props) => props.visible ? css`
    width: 100%;
  ` : css`
    width: 0;
  `}
`;

export const TopicSidebarMask = styled.div<{ visible: boolean }>`
  position: absolute;
  background: #00000073;
  width: 100%;
  height: 100%;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity ease .3s;
`;

export const TopicSidebarContent = styled.div<{ visible: boolean }>`
  position: absolute;
  background: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0 0 8px;
  min-width: 40rem;
  height: 100%;
  transform: translateX(${(props) => props.visible ? '0' : '-100%'});
  transition: transform ease .3s;
`;

export const TopicSidebarHeader = styled.div`
  padding: 1.75rem 4rem;
  border-bottom: 1px solid #e9ebf0;
`;

export const TopicSidebarBody = styled.div`

`;

export const TopicSidebarClose = styled.button`
  color: #637381;
`;

export const TopicSidebarTitle = styled.span`
  ${mixinFont144};
  display: block;
  margin-top: 3.2rem;
  margin-bottom: 2rem;
  color: #637381;
  padding: 0 4rem;
`;

export const TopicSidebarList = styled.ul``;

export const TopicSidebarItem = styled.li`
  &:hover {
    background: #e9ebf0;
  }
`;

export const TopicSidebarLink = styled.a`
  ${mixinFont167};
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 4rem;
`;