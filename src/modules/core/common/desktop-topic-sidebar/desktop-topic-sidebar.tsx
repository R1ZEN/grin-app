import React, { useCallback, useEffect, useRef, useState } from 'react';
import CloseIcon from '@static/icons/cross.svg?sprite';
import ArrowRightIcon from '@static/icons/arrow-right.svg?sprite';
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
} from './desktop-topic-sidebar.styled';
import { Transition } from 'react-transition-group';
import { useOnClickOutside } from '../../hooks/use-outside-hook';
import Link from 'next/link';
import { useRouteHref } from '@modules/core/hooks/use-route-href';
import { RouteType } from '@routes/routes';

export interface IPageSidebarProps {
  visible: boolean;
  onClose?(): void;
}

const list = [
  {
    title: 'Design',
    routeType: RouteType.topic,
    query: { topicSlug: 'design' },
  },
];

export const DesktopTopicSidebar: React.FC<IPageSidebarProps> = (props) => {
  const { visible, onClose } = props;
  const [toggle, setToggle] = useState(false);
  const contentRef = useRef(null);
  const getHref = useRouteHref();
  useOnClickOutside(contentRef, () => setToggle(false));

  useEffect(() => {
    setToggle(visible);
  }, [visible]);

  const onCloseSidebar = useCallback(() => {
    setToggle(false);
  }, []);

  const onExited = () => {
    onClose && onClose();
  };

  return (
    <Transition
      in={toggle}
      timeout={300}
      onExited={onExited}
    >
      {(state) => (
        <TopicSidebarWrapper
          data-node='topic-sidebar'
          state={state}
        >
          <TopicSidebarMask state={state} />

          <TopicSidebarContent
            state={state}
            ref={contentRef}
          >
            <TopicSidebarHeader>
              <TopicSidebarClose onClick={onCloseSidebar}>
                <SvgSimple
                  src={CloseIcon}
                  width='25'
                  fill='currentColor'
                />
              </TopicSidebarClose>
            </TopicSidebarHeader>

            <TopicSidebarBody>
              <TopicSidebarTitle>Learn by Topics</TopicSidebarTitle>

              <TopicSidebarList>
                {list.map(({ title, routeType, query }) => {
                  return (
                    <TopicSidebarItem key={title}>
                      <Link
                        href={getHref(routeType, query)}
                        shallow
                        passHref
                      >
                        <TopicSidebarLink data-client='true'>
                          <span>{title}</span>

                          <SvgSimple
                            src={ArrowRightIcon}
                            width='7'
                            fill='currentColor'
                          />
                        </TopicSidebarLink>
                      </Link>
                    </TopicSidebarItem>
                  );
                })}
              </TopicSidebarList>
            </TopicSidebarBody>
          </TopicSidebarContent>
        </TopicSidebarWrapper>
      )}
    </Transition>
  );
};
