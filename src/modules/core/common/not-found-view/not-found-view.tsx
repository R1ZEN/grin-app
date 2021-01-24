import React from 'react';
import {
  NotFoundArticle,
  NotFoundLink,
  NotFoundParagraph, NotFoundTitle, NotFoundWrapper,
} from './not-found-view.styled';
import { useRouter } from 'next/router';

export interface INotFoundPageProps {
}

export const NotFoundView: React.FC<INotFoundPageProps> = () => {
  const router = useRouter();

  const onSearchClick = (e) => {
    e.preventDefault();
    router.push('/search', undefined, { shallow: true });
  };

  const onHomeClick = (e) => {
    e.preventDefault();
    router.push('/', undefined, { shallow: true });
  };

  return (
    <NotFoundArticle>
      <NotFoundWrapper>
        <NotFoundTitle>Oops!</NotFoundTitle>

        <NotFoundParagraph>
          We cannot find the page you are looking for. Try searching our {' '}

          <NotFoundLink
            href='/search'
            onClick={onSearchClick}
          >
            course catalog</NotFoundLink>, or

          <NotFoundLink
            href='/'
            onClick={onHomeClick}
          >
            go back to home
          </NotFoundLink>.
        </NotFoundParagraph>

        <NotFoundParagraph>
          Visit our {' '}

          <NotFoundLink href='https://help.grinfer.com/'>
            help page
          </NotFoundLink>

          {' '} for any
          questions.
        </NotFoundParagraph>
      </NotFoundWrapper>
    </NotFoundArticle>
  );
};