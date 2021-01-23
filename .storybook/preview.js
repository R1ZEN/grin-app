import React from 'react';
import { GlobalStyle } from '../src/modules/core/global.styled';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
