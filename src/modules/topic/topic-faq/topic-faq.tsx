import React from 'react';
import { Collapse } from '../../core/common/collapse/collapse';
import {
  CollapseContent,
  TopicFAQArticle,
  TopicFAQCollapseWrapper,
  TopicFAQTitle,
} from './topic-faq.styled';
import { TopicCollapseTitle } from '../topic-collapse-title/topic-collapse-title';

interface ITopicFAQProps {
  list: {
    title: string;
    content: string[];
  }[]
}

export const TopicFAQ: React.FC<ITopicFAQProps> = (props) => {
  const {
    list,
  } = props;

  return (
    <TopicFAQArticle>
      <TopicFAQTitle>Frequently asked questions</TopicFAQTitle>

      {list.map(({ title, content }) => {
        return (
          <TopicFAQCollapseWrapper key={title}>
            <Collapse
              title={<TopicCollapseTitle>{title}</TopicCollapseTitle>}
              content={content.map((str, index) => (
                <CollapseContent key={index}>{str}</CollapseContent>
              ))}
            />
          </TopicFAQCollapseWrapper>
        );
      })}
    </TopicFAQArticle>
  );
};
