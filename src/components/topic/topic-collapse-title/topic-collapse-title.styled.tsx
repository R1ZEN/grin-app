import styled, { css } from 'styled-components';
import { mixinFont167 } from '../../core/mixins/font-mixins';

export const CollapseTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

export const CollapseTitle = styled.h3`
  ${mixinFont167};
  color: #212b36;
  margin: 0;
`;

export const CollapsePlus = styled.div<{ plus: boolean }>`
  position: relative;
  width: 20px;
  display: flex;
  flex-shrink: 0;
  align-items: center;

  &::before {
    transition: transform 0.3s ease-in-out;
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #212b36;
    transform: rotate(90deg);
  }

  &::after {
    transition: transform 0.3s ease-in-out;
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #212b36;
    transform: rotate(180deg);
  }

  ${(props) =>
    props.plus &&
    css`
      &::before {
        transform: rotate(90deg);
      }

      &::after {
        transform: rotate(180deg);
        opacity: 1;
      }
    `}

  ${(props) =>
    !props.plus &&
    css`
      opacity: 1;

      &::before {
        transform: rotate(0deg);
        opacity: 0;
      }

      &::after {
        transform: rotate(0deg);
      }
    `}
`;
