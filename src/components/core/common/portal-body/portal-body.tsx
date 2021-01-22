import React from 'react';
import ReactDOM from 'react-dom';
import { isServer } from '../../utils/is-server/is-server';

export const PortalBody: React.FC = (props) => {
  const { children } = props;

  return isServer ? null : ReactDOM.createPortal(children, document.body);
};