import React from 'react';
import {
  TopicAboutArticle,
  TopicAboutParagraph,
  TopicAboutTitle,
} from './topic-about.styled';

interface ITopicAboutProps {
  title: string;
  content: string[];
}

export const TopicAbout: React.FC<ITopicAboutProps> = ({ title, content }) => {
  return (
    <TopicAboutArticle>
      <TopicAboutTitle>{title}</TopicAboutTitle>
      {content.map((str, index) => {
        return <TopicAboutParagraph key={index}>{str}</TopicAboutParagraph>;
      })}
    </TopicAboutArticle>
  );
};
