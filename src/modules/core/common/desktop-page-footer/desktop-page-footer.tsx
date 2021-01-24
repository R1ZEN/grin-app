import React from 'react';
import {
  FooterLink,
  FooterListItem,
  PageFooterInner,
  PageFooterList,
  PageFooterTitle,
  PageFooterWrapper,
} from './desktop-page-footer.styled';

export interface IPageFooterProps {
}

const linkList = [
  {
    title: 'Help',
    href: '',
  },
  {
    title: 'Blog',
    href: '',
  },
  {
    title: 'Terms of Use',
    href: '',
  },
  {
    title: 'Privacy Policy',
    href: '',
  },
  {
    title: 'Affiliates',
    href: '',
  },
];

export const DesktopPageFooter: React.FC<IPageFooterProps> = () => {
  return (
    <PageFooterWrapper>
      <PageFooterInner>
        <PageFooterTitle>
          Grinfer e-learning platform. {new Date().getFullYear()}
        </PageFooterTitle>

        <PageFooterList>
          {linkList.map(({
 title, href, 
}) => {
            return (
              <FooterListItem key={title}>
                <FooterLink href={href}>{title}</FooterLink>
              </FooterListItem>
            );
          })}
        </PageFooterList>
      </PageFooterInner>
    </PageFooterWrapper>
  );
};