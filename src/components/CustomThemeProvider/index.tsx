/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/styles';

import theme from '@src/themes/theme';
import darkTheme from '@src/themes/darkTheme';
import { selectors } from '@src/slices/themeSlice';
import { useSelector } from 'react-redux';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

export default function CustomProvider({
  Component,
  pageProps,
}: Props): ReactElement {
  const { currentTheme } = useSelector(selectors.selectTheme);
  return (
    <MuiThemeProvider theme={currentTheme === 'dark' ? darkTheme : theme}>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
