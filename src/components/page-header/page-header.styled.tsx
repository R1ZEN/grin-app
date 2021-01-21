import styled from 'styled-components';
import { mixinFont144 } from '../core/mixins/font-mixins';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9ebf0;
`;

export const HeaderMenu = styled.button`
  padding: 2.4rem;
  border-right: 1px solid #e9ebf0;
`;

export const HeaderLogoWrapper = styled.button`
  padding: 0 3.2em 0 2.4em;
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
`;

export const HeaderSignUpButton = styled.button`
  ${mixinFont144};
  background: #6554c0;
  border-radius: 50px;
  padding: .8em .8em .8em 1.6em;
  color: #fff;
  display: flex;
  align-items: center;
  transition: opacity ease .3s;

  span {
    padding-right: .8em;
  }

  &:hover {
    transition: opacity ease .3s;
    opacity: .8;
  }
`;