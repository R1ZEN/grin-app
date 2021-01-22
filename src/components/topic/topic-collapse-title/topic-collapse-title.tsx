import React, { useState } from 'react';
import {
  CollapsePlus,
  CollapseTitle,
  CollapseTitleWrapper,
} from './topic-collapse-title.styled';

export const TopicCollapseTitle: React.FC = ({ children }) => {
  const [plus, setPlus] = useState(true);

  const onClick = () => {
    setPlus(!plus);
  };

  return (
    <CollapseTitleWrapper onClick={onClick}>
      <CollapseTitle>{children}</CollapseTitle>
      <CollapsePlus plus={plus} />
    </CollapseTitleWrapper>
  );
};
