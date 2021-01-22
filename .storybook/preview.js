import React from 'react';
import { GlobalStyle } from '../src/components/core/global.styled';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
