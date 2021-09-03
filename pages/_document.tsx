import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

type ReturnType = {
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[];
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<ReturnType> {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(
              // eslint-disable-next-line react/jsx-props-no-spreading
              materialSheets.collect(<App {...props} />),
            ),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <meta name="theme-color" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://free.bboxtype.com/embedfonts/?family=FiraGO:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800idisplay=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
