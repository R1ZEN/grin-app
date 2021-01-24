import React, { useEffect, useRef, useState } from 'react';
import {
  PopoverContent,
  PopoverTrigger,
  PopoverWrapper,
} from './popover-simple.styled';
import { useOnClickOutside } from '../../hooks/use-outside-hook';

export interface IPopoverSimpleProps {
  visible?: boolean;
  content: React.ReactNode;
  children: React.ReactNode;
  onVisibleChange?(): void;
}

export const PopoverSimple: React.FC<IPopoverSimpleProps> = (props) => {
  const {
    children, content, visible, onVisibleChange,
  } = props;
  const [localVisible, setLocalVisible] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setLocalVisible(false));

  useEffect(() => {
    setLocalVisible(visible);
  }, [visible]);

  const onTriggerClick = () => {
    setLocalVisible(!localVisible);
    onVisibleChange && onVisibleChange();
  };

  return (
    <PopoverWrapper
      data-node='popover'
      ref={ref}
    >
      <PopoverTrigger
        data-node='trigger'
        onClick={onTriggerClick}
      >
        {children}
      </PopoverTrigger>

      <PopoverContent
        data-node='content'
        hidden={!localVisible}
      >
        {content}
      </PopoverContent>
    </PopoverWrapper>
  );
};