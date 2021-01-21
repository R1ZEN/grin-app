import React from 'react';
import CreateAccountIcon from 'public/icons/create-account-icon.svg?sprite';
import BurgerIcon from 'public/icons/burger.svg?sprite';
import LogoIcon from 'public/icons/logo.svg?sprite';
import InputSearchIcon from 'public/icons/input-search.svg?sprite';
import InputCrossIcon from 'public/icons/input-cross.svg?sprite';
import {
  HeaderAuthWrapper, HeaderLogoWrapper,
  HeaderMenu, HeaderSearch,
  HeaderSignInButton,
  HeaderSignUpButton,
  HeaderWrapper, SearchButton, SearchClearButton, SearchInput,
} from './page-header.styled';

export interface IPageHeaderProps {
}

export const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  const {} = props;

  return (
    <HeaderWrapper>

      <HeaderMenu>
        <BurgerIcon title='Topic Menu' width='12' />
      </HeaderMenu>

      <HeaderLogoWrapper>
        <LogoIcon title='Grinfer' width='64' />
      </HeaderLogoWrapper>

      <HeaderSearch>
        <SearchButton>
          <InputSearchIcon width='12' fill='currentColor' />
        </SearchButton>
        <SearchInput type='text' placeholder='Search' />
        <SearchClearButton>
          <InputCrossIcon width='22' fill='currentColor' />
        </SearchClearButton>
      </HeaderSearch>

      <HeaderAuthWrapper>
        <HeaderSignInButton>Log In</HeaderSignInButton>
        <HeaderSignUpButton>
          <span>Create Account</span>
          <CreateAccountIcon width='24' />
        </HeaderSignUpButton>
      </HeaderAuthWrapper>

    </HeaderWrapper>
  );
};
