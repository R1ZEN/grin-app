import React from 'react';
import {
  Details,
  DetailsContent,
  DetailsSummary,
} from './collapse.styled';

interface ICollapseProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Collapse: React.FC<ICollapseProps> = (props) => {
  const { title, content } = props;

  return (
    <Details>
      <DetailsSummary>{title}</DetailsSummary>
      <DetailsContent>{content}</DetailsContent>
    </Details>
  );
};
