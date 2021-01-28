import styled from 'styled-components';
import { mixinFont144 } from '../../mixins/font-mixins';

export const HeaderWrapper = styled.div`
  padding-top: 64px;
`;

export const HeaderFixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1440px;
  max-height: 64px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9ebf0;
  background: #fff;
`;

export const HeaderMenu = styled.button`
  padding: 24px;
  border-right: 1px solid #e9ebf0;
`;

export const HeaderLogoLink = styled.a`
  padding: 0 32px 0 24px;
`;

export const HeaderSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #637381;

  width: 264px;
  height: 40px;
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 12px;
  margin-top: 2px;
  color: #212B36;
`;

export const SearchClearButton = styled.button`
  visibility: hidden;
  position: absolute;
  right: 10px;
  margin-top: 3px;
  color: #212B36;
`;

export const SearchInput = styled.input`
  ${mixinFont144};
  width: 100%;
  height: 100%;
  border-radius: .4em;
  background: #f4f5f7;
  padding: .4em 1.1em .4em 3em;
  color: #000;
  outline: none;

  &::placeholder {
    color: #bfbfbf;
  }

  &:focus + ${SearchClearButton} {
    visibility: visible;
  }
`;

export const HeaderAuthWrapper = styled.div`
  margin-left: auto;
  display: flex;
  margin-right: 2.4em;
  white-space: nowrap;
`;

export const HeaderSignInButton = styled.button`
  ${mixinFont144};
  margin-right: 2.4em;
  
  &:hover {
    color: #6554c0;
  }
`;

export const HeaderSignUpButton = styled.button`
  background: #6554c0;
  border-radius: 50px;
  padding: .8em .8em .8em 1.6em;
  color: #fff;
  display: flex;
  align-items: center;
  transition: opacity ease .3s;
  max-height: 4rem;

  span {
    ${mixinFont144};
    padding-right: .8em;
  }

  &:hover {
    transition: opacity ease .3s;
    opacity: .8;
  }
`;