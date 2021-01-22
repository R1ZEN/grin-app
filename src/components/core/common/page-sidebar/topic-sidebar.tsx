import React, { useCallback, useEffect, useState } from 'react';
import CloseIcon from 'public/icons/cross.svg?sprite';
import ArrowRightIcon from 'public/icons/arrow-right.svg?sprite';
import { SvgSimple } from '../svg-simple/svg-simple';
import {
  TopicSidebarBody,
  TopicSidebarClose,
  TopicSidebarContent,
  TopicSidebarHeader,
  TopicSidebarItem,
  TopicSidebarLink,
  TopicSidebarList,
  TopicSidebarMask,
  TopicSidebarTitle,
  TopicSidebarWrapper,
} from './page-sidebar.styled';

export interface IPageSidebarProps {
  visible: boolean;
  onClose?(): void;
}

const list = [
  {
    title: 'Design',
    href: '/topic/design',
  },
];

export const TopicSidebar: React.FC<IPageSidebarProps> = (props) => {
  const { visible, onClose } = props;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    setSidebarVisible(visible);
  }, [visible]);

  const onCloseSidebar = useCallback(() => {
    setSidebarVisible(false);

    if (onClose) {
      setTimeout(() => onClose(), 300);
    }
  }, []);

  return (
    <TopicSidebarWrapper data-node='topic-sidebar' visible={sidebarVisible}>
      <TopicSidebarMask visible={sidebarVisible} />

      <TopicSidebarContent visible={sidebarVisible}>
        <TopicSidebarHeader>
          <TopicSidebarClose onClick={onCloseSidebar}>
            <SvgSimple src={CloseIcon} width='25' fill='currentColor' />
          </TopicSidebarClose>
        </TopicSidebarHeader>

        <TopicSidebarBody>
          <TopicSidebarTitle>Learn by Topics</TopicSidebarTitle>

          <TopicSidebarList>
            {list.map(({ title, href }) => {
              return (
                <TopicSidebarItem key={title}>
                  <TopicSidebarLink href={href} data-client='true'>
                    <span>{title}</span>
                    <SvgSimple
                      src={ArrowRightIcon}
                      width='7'
                      fill='currentColor'
                    />
                  </TopicSidebarLink>
                </TopicSidebarItem>
              );
            })}
          </TopicSidebarList>
        </TopicSidebarBody>
      </TopicSidebarContent>
    </TopicSidebarWrapper>
  );
};
