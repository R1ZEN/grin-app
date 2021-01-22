import styled from 'styled-components';
import { mixinFont144, mixinFont407 } from '../../core/mixins/font-mixins';

export const TopicTitle = styled.h1`
  ${mixinFont407};
  margin-top: 40px;
  margin-bottom: 0;
`;

export const TopicDescription = styled.p`
  ${mixinFont144};
  color: #637381;
  margin-top: 16px;
  margin-bottom: 0;
  max-width: 1096px;
`;

export const TopicSelectPanelTitle = styled.p`
  ${mixinFont144};
  margin-bottom: 16px;
`;

export const TopicSelectPanelList = styled.div`
  display: flex;
`;