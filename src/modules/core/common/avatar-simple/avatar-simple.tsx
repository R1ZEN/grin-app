import React from 'react';
import { AvatarImage } from '@modules/core/common/avatar-simple/avatar-simple.styled';

export interface IAvatarSimpleProps {
  src: string;
  alt: string;
  [key: string]: string;
}

export const AvatarSimple: React.FC<IAvatarSimpleProps> = (props) => {
  const { src, alt } = props;

  return <AvatarImage src={src} alt={alt} />;
};