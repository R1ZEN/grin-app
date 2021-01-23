import React, { useState } from 'react';
import CreateAccountIcon from 'public/icons/create-account-icon.svg?sprite';
import BurgerIcon from 'public/icons/burger.svg?sprite';
import LogoIcon from 'public/icons/logo.svg?sprite';
import InputSearchIcon from 'public/icons/input-search.svg?sprite';
import InputCrossIcon from 'public/icons/cross.svg?sprite';
import {
  HeaderAuthWrapper, HeaderLogoWrapper,
  HeaderMenu, HeaderSearch,
  HeaderSignInButton,
  HeaderSignUpButton,
  HeaderWrapper, SearchButton, SearchClearButton, SearchInput,
} from './desktop-page-header.styled';
import { SvgSimple } from '../svg-simple/svg-simple';
import { DesktopTopicSidebar } from '../desktop-topic-sidebar/desktop-topic-sidebar';

export interface IPageHeaderProps {
}

export const DesktopPageHeader: React.FC<IPageHeaderProps> = (props) => {
  const {} = props;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const onToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderMenu onClick={onToggleSidebar}>
          <SvgSimple src={BurgerIcon} title='Topic Menu' width='12' />
        </HeaderMenu>

        <HeaderLogoWrapper>
          <SvgSimple src={LogoIcon} title='Grinfer' width='64' />
        </HeaderLogoWrapper>

        <HeaderSearch>
          <SearchButton>
            <SvgSimple src={InputSearchIcon} width='12' fill='currentColor' />
          </SearchButton>
          <SearchInput type='text' placeholder='Search' />
          <SearchClearButton>
            <SvgSimple src={InputCrossIcon} width='22' fill='currentColor' />
          </SearchClearButton>
        </HeaderSearch>

        <HeaderAuthWrapper>
          <HeaderSignInButton>Log In</HeaderSignInButton>
          <HeaderSignUpButton>
            <span>Create Account</span>
            <SvgSimple src={CreateAccountIcon} width='24' />
          </HeaderSignUpButton>
        </HeaderAuthWrapper>
      </HeaderWrapper>

      <DesktopTopicSidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)}/>
    </>
  );
};
