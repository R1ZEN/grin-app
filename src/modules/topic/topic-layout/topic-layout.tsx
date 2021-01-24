import React from 'react';
import { TopicFAQ } from '../topic-faq/topic-faq';
import {
  TopicDescription,
  TopicSelectPanelTitle,
  TopicSelectPanelList,
  TopicTitle,
} from './topic-layout.styled';
import { TopicSelect } from '../topic-select/topic-select';

export interface ITopicLayoutProps {
}

export const TopicLayout: React.FC<ITopicLayoutProps> = () => {
  return (
    <>
      <TopicTitle>Design</TopicTitle>

      <TopicDescription>Learn Design online comprehensively. Watch courses in
        web design, 3D animation, UI/UX app
        design, modeling, and many more. Find the best tutors in design for
        individual lessons. Or read
        straight-to-the-point stories about the world of design and
        creativity.</TopicDescription>

      <TopicSelectPanelTitle>
        Use filters to find the right content for your goals.
      </TopicSelectPanelTitle>

      <TopicSelectPanelList>
        <TopicSelect />

        <TopicSelect />
      </TopicSelectPanelList>

      <TopicFAQ list={[{
        title: 'Title',
        content: ['Content'],
      }]}
      />
    </>
  );
};