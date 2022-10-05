import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import theme from '../styles/theme';
import AppContextProvider from '../contexts/appcontext';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || '/api/';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
