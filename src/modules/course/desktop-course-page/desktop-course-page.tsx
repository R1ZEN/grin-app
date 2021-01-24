import React from 'react';
import { DesktopPageLayout } from '@modules/core/common/desktop-page-layout/desktop-page-layout';
import { DesktopCourseView } from '@modules/course/desktop-course-view/desktop-course-view';

export const DesktopCoursePage: React.FC = () => {
  return (
    <DesktopPageLayout>
      <DesktopCourseView />
    </DesktopPageLayout>
  );
};
