import { DesktopPageLayout } from '../modules/core/common/desktop-page-layout/desktop-page-layout';
import { NotFoundView } from '../modules/core/common/not-found-view/not-found-view';

export default function NotFoundPage() {
  return (
    <DesktopPageLayout>
      <NotFoundView />
    </DesktopPageLayout>
  );
}