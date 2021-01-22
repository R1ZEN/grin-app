import { GlobalStyle } from '../components/core/global.styled';
import { useFontLoader } from '../components/core/hooks/use-font-loader';
import { useGlobalLinkHandler } from '../components/core/hooks/use-global-link-handler';

function App({ Component, pageProps }) {
  useFontLoader()
  useGlobalLinkHandler();

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
