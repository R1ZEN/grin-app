import styled from 'styled-components';
import { mixinFont144, mixinFont167 } from '../../mixins/font-mixins';
import {
  ENTERED,
  ENTERING, EXITED, EXITING,
  TransitionStatus,
} from 'react-transition-group/Transition';

export const TopicSidebarWrapper = styled.div<{ state: TransitionStatus }>`
  position: fixed;
  top: 0;
  height: 100%;
  visibility: ${props => props.state === EXITED ? 'hidden' : 'visible'};
  width: ${props => [ENTERING, ENTERED, EXITING].includes(props.state) ? '100%' : '0'};
`;

export const TopicSidebarMask = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  background: #00000073;
  width: 100%;
  height: 100%;
  opacity: ${props => [ENTERING, ENTERED].includes(props.state) ? '1' : '0'};
  transition: opacity ease .6s;
`;

export const TopicSidebarContent = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  background: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0 0 8px;
  min-width: 40rem;
  height: 100%;
  transform: translateX(${(props) => [ENTERING, ENTERED].includes(props.state) ? '0' : '-100%'});
  transition: transform ease-out .3s;
`;

export const TopicSidebarHeader = styled.div`
  padding: 1.35rem 4rem;
  border-bottom: 1px solid #e9ebf0;
`;

export const TopicSidebarBody = styled.div``;

export const TopicSidebarClose = styled.button`
  color: #637381;
  padding: .4rem;
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