import styled from 'styled-components';
import { mixinFont144, mixinFont247 } from '../../core/mixins/font-mixins';

export const TopicFAQArticle = styled.article`
  padding-top: 40px;
  margin-bottom: 64px;
`;

export const TopicFAQTitle = styled.h3`
  ${mixinFont247};
  color: #212b36;
  margin-bottom: 32px;
`;

export const TopicFAQCollapseWrapper = styled.div`
  border-top: 1px solid #e9ebf0;

  &:last-of-type {
    border-bottom: 1px solid #e9ebf0;
  }
`;

export const CollapseContent = styled.p`
  ${mixinFont144};
  color: #212b36;
  margin: 16px 0 0;

  &:first-of-type {
    margin: 0;
  }
  &:last-of-type {
    padding-bottom: 30px;
  }
`;
