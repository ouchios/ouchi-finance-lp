import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@src/store';
import CustomProvider from '@src/components/CustomThemeProvider';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

declare global {
  type FixMeAny = any;
}

const MyApp = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  function gtag(dataLayer){
    console.info("arguments", arguments)
    dataLayer.push(arguments)
    }
  return (
    <>
      <Head>
        <title>Ouchi Finance</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QRG7RLWPK5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          
          gtag('js', new Date());

          gtag('config', 'G-QRG7RLWPK5');
      </script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomProvider Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
