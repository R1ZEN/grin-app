import React from 'react';
import ArrowRightIcon from '@static/icons/arrow-right.svg';
import {
  PillArrowWrapper,
  PillButton,
} from './select-pill-button.styled';
import { SvgSimple } from '../../../core/common/svg-simple/svg-simple';

interface ISelectPillButtonProps {
  title: string;
  selected: boolean;
  visible: boolean;
}

export const SelectPillButton: React.FC<ISelectPillButtonProps> = (props) => {
  const {
 title, selected, visible, 
} = props;

  return (
    <PillButton selected={selected}>
      <span>{title}</span>

      <PillArrowWrapper
        open={visible}
        selected={selected}
      >
        <SvgSimple
          src={ArrowRightIcon}
          fill='currentColor'
        />
      </PillArrowWrapper>
    </PillButton>
  );
};
