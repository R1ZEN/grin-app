import React from 'react';
import { PopoverSimple } from '../../core/common/popover-simple/popover-simple';
import { SelectPillButton } from '../select-pill-button/select-pill-button';
import { TopicSelectItem, TopicSelectList } from './topic-select.styled';

export interface ITopicSelectProps {}

const popoverList = (
  <TopicSelectList>
    {['Design', 'Health and Fitness', 'Technology'].map((title) => {
      return (
        <TopicSelectItem>
          <a href=''>{title}</a>
        </TopicSelectItem>
      )
    })}
  </TopicSelectList>
)

export const TopicSelect: React.FC<ITopicSelectProps> = (props) => {
  const {  } = props;

  return (
    <PopoverSimple content={popoverList}>
      <SelectPillButton
        title='Topic'
        selected={false}
        visible={false}
      />
    </PopoverSimple>
  );
};