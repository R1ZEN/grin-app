import React from 'react';
import {
  NotFoundArticle,
  NotFoundLink,
  NotFoundParagraph, NotFoundTitle, NotFoundWrapper,
} from './not-found-view.styled';

export interface INotFoundPageProps {}

export const NotFoundView: React.FC<INotFoundPageProps> = () => {
  return (
    <NotFoundArticle>
      <NotFoundWrapper>
        <NotFoundTitle>Oops!</NotFoundTitle>
        <NotFoundParagraph>
          We cannot find the page you are looking for. Try searching our
          <NotFoundLink href=''>course catalog</NotFoundLink>, or{' '}
          <NotFoundLink href=''>go back to home</NotFoundLink>.
        </NotFoundParagraph>
        <NotFoundParagraph>
          Visit our <NotFoundLink href=''>help page</NotFoundLink> for any
          questions.
        </NotFoundParagraph>
      </NotFoundWrapper>
    </NotFoundArticle>
  );
};