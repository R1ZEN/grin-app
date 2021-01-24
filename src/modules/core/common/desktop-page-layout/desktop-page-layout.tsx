import React from 'react';
import { DesktopPageHeader } from '../desktop-page-header/desktop-page-header';
import { DesktopPageFooter } from '../desktop-page-footer/desktop-page-footer';
import { PageLayoutWrapper } from './desktop-page-layout.styled';
import { DesktopPageContentContainer } from '../desktop-page-content-container/desktop-page-content-container';

export const DesktopPageLayout: React.FC = ({ children }) => {
  return (
    <PageLayoutWrapper>
      <DesktopPageHeader />

      <DesktopPageContentContainer>
        {children}
      </DesktopPageContentContainer>

      <DesktopPageFooter />
    </PageLayoutWrapper>
  );
};
