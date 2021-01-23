import styled from 'styled-components';
import { mixinFont164 } from '../../core/mixins/font-mixins';

export const TopicSelectList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
  white-space: nowrap;
`;

export const TopicSelectItem = styled.li`
  ${mixinFont164};
  cursor: pointer;
  padding: 13px 16px;

  &:hover {
    color: #212b36;
    background: #f4f5f7;
    border-radius: 6px;
  }
`;