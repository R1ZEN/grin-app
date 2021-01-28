import React from 'react';
import { DesktopPageLayout } from '@modules/core/common/desktop-page-layout/desktop-page-layout';
import { TopicLayout } from '@modules/topic/components/topic-layout/topic-layout';

export const DesktopTopicPage: React.FC = () => {
  return (
    <DesktopPageLayout>
      <TopicLayout />
    </DesktopPageLayout>
  );
};
