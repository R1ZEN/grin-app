import React from 'react';

const StubPage: React.FC = () => null;

// @ts-ignore
StubPage.getInitialProps = ({ res }) => {
  // @ts-ignore
  res.redirect('/');
};

export default StubPage;
