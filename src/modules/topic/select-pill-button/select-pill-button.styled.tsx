import styled from 'styled-components';
import { mixinFont164 } from '../../core/mixins/font-mixins';

export const PillArrowWrapper = styled.span<{ open?: boolean; selected?: boolean }>`
  padding-left: 12px;

  svg {
    display: inline-block;
    color: ${(props) => (props.selected ? '#fff' : '#212B36')};
    width: 6px;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.open ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }
`;

export const PillButton = styled.button<{ selected: boolean }>`
  ${mixinFont164};
  padding: 11px 21px;
  border-radius: 100px;
  background: ${(props) => (props.selected ? '#9e8ef6' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#212B36')};
  border: 1px solid ${(props) => (props.selected ? 'transparent' : '#E2E4EB')};
`;
