import React from 'react';
import { PageHeader } from '../page-header/page-header';
import { PageFooter } from '../page-footer/page-footer';
import { PageLayoutWrapper } from './page-layout.styled';
import { PageContentContainer } from '../page-content-container/page-content-container';
import { useGlobalLinkHandler } from '../../hooks/use-global-link-handler';

export const PageLayout: React.FC = ({ children }) => {
  // useGlobalLinkHandler();

  return (
    <PageLayoutWrapper>
      <PageHeader />
      <PageContentContainer>
        {children}
      </PageContentContainer>
      <PageFooter />
    </PageLayoutWrapper>
  )
}