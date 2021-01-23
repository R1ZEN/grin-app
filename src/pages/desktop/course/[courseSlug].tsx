import { DesktopPageLayout } from '@modules/core/common/desktop-page-layout/desktop-page-layout';
import { DesktopCourseView } from '@modules/course/desktop-course-view/desktop-course-view';

export default function DesktopCoursePage() {
  return (
    <DesktopPageLayout>
      <DesktopCourseView />
    </DesktopPageLayout>
  )
}
