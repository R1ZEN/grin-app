import { GlobalStyle } from '../components/core/global.styled';
import { useFontLoader } from '../components/core/hooks/use-font-loader';

export default function App({ Component, pageProps }) {
  useFontLoader()

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
