import React from 'react';
import { DesktopTopicSidebar } from './desktop-topic-sidebar';

export default {
  title: 'modules/core/common/desktop-topic-sidebar',
};

export const TopicSidebarDefault = () => {
  return (
    <DesktopTopicSidebar visible={true} />
  );
};