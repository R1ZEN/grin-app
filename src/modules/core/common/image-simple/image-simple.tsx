import React from 'react';

export interface IImageSimpleProps {
  src: string;
  alt?: string;
  className?: string;

  [key: string]: string;
}

export const ImageSimple: React.FC<IImageSimpleProps> = (props) => {
  const {
    src, alt, className,
  } = props;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      title={`Grinfer - ${alt}`}
    />
  );
};
