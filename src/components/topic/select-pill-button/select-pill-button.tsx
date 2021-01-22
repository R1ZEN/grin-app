import React from 'react';
import ArrowRightIcon from 'public/icons/arrow-right.svg?sprite';
import {
  PillArrowWrapper,
  PillButton,
} from './select-pill-button.styled';

interface ISelectPillButtonProps {
  title: string;
  selected: boolean;
  visible: boolean;
}

export const SelectPillButton: React.FC<ISelectPillButtonProps> = (props) => {
  const { title, selected, visible } = props;

  return (
    <PillButton selected={selected}>
      <span>{title}</span>
      <PillArrowWrapper open={visible} selected={selected}>
        <ArrowRightIcon fill='currentColor' />
      </PillArrowWrapper>
    </PillButton>
  );
};
