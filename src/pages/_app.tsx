import { GlobalStyle } from '../modules/core/global.styled';
import { useFontLoader } from '../modules/core/hooks/use-font-loader';

export default function App({ Component, pageProps }) {
  useFontLoader()

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
