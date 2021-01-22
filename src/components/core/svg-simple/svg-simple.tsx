import React from 'react';

export interface ISvgRenderComponentProps {
  src: string | React.FC;
  [key: string]: any;
}

export const SvgSimple: React.FC<ISvgRenderComponentProps> = (props) => {
  const { src, ...otherProps } = props;

  if (typeof src === 'string') {
    return <img src={src} {...otherProps} />
  }

  const SvgComponent = src;

  return <SvgComponent {...otherProps} />;
};