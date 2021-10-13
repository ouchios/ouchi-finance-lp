import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@src/store';
import CustomProvider from '@src/components/CustomThemeProvider';
import Header from '@src/components/Header';
import Content from '@src/components/Content';
import styled from 'styled-components';
import Image from 'next/image';
import { useWidth } from '@src/themes/sizes';


const Main = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: ${(props: any) => props.theme.palette.gradients.body};
`;

interface ImageDivTypes {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
}

const Img = styled.div`
  position: absolute;
  left: ${(props: ImageDivTypes) => props.left || ''};
  top: ${(props: ImageDivTypes) => props.top || ''};
  right: ${(props: ImageDivTypes) => props.right || ''};
  bottom: ${(props: ImageDivTypes) => props.bottom || ''};
  width: ${(props: ImageDivTypes) => props.width || ''};
  height: ${(props: ImageDivTypes) => props.height || ''};
  z-index: 1;
`;

interface BlurredDotsTypes {
  src: string;
  alt: string;
  width: string,
  height: string,
  left?: any;
  top?: any;
  right?: any;
  bottom?: any;
}

const defSizes = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
};

const blurredDots: BlurredDotsTypes[] = [
  {
    src: '/green-circles/circle-1.svg',
    alt: 'circle-1',
    width: '465.92px',
    height: '468.93px',
    left: {
      xs: '-112.52px',
      sm: '-112.52px',
      md: '-112.52px',
      lg: '-112.52px',
      xl: '-112.52px',
    },
    top: {
      xs: '100.09px',
      sm: '170.09px',
      md: '300.09px',
      lg: '567.09px',
      xl: '567.09px',
    },
    right: defSizes,
    bottom: defSizes,
  },
  {
    src: '/green-circles/circle-2.svg',
    alt: 'circle-2',
    width: '637.52px',
    height: '640.11px',
    left: {
      xs: '-300px',
      sm: '-300px',
      md: '-170.06px',
      lg: '-170.06px',
      xl: '-150.06px',
    },
    top: {
      xs: '100.78px',
      sm: '120.78px',
      md: '400.78px',
      lg: '663.78px',
      xl: '663.78px',
    },
    right: defSizes,
    bottom: defSizes,
  },
  {
    src: '/green-circles/circle-3.svg',
    alt: 'circle-3',
    width: '637.52px',
    height: '640.11px',
    right: {
      xs: '-100px',
      sm: '-100px',
      md: '-100px',
      lg: '-100px',
      xl: '-100px',
    },
    top: {
      xs: '400.78px',
      sm: '400.78px',
      md: '663.78px',
      lg: '663.78px',
      xl: '663.78px',
    },
    left: defSizes,
    bottom: defSizes,
  },
  {
    src: '/green-circles/circle-4.svg',
    alt: 'circle-4',
    width: '320.92px',
    height: '321.6px',
    left: {
      xs: '-120px',
      sm: '-120px',
      md: '569.27px',
      lg: '569.27px',
      xl: '569.27px',
    },
    top: {
      xs: '900.14px',
      sm: '1100.14px',
      md: '1459.14px',
      lg: '1150.14px',
      xl: '1400.14px',
    },
    right: defSizes,
    bottom: defSizes,
  },
  {
    src: '/green-circles/circle-5.svg',
    alt: 'circle-5',
    width: '638.07px',
    height: '639.57px',
    right: {
      xs: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
    },
    bottom: {
      xs: '-10px',
      sm: '-10px',
      md: '-10px',
      lg: '-10px',
      xl: '-10px',
    },
    left: defSizes,
    top: defSizes,
  },
];

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const BlogText = styled.h2`
  font-size: 56px;
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: #3F6697;
`;

const NewsText = styled.p`
  padding: 0;
  margin: 0 0 1.45rem;
`;

const SubText = styled.a`
  color: #42B7A0;
  text-decoration: none;
`;

const BlogTitle = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0px auto;
  width: 100%;
  padding: 4rem;
  z-index: 1;
  position: relative;
`;

const BlogStyleBlock = styled.div`
  margin: 1rem 0px;
  position: relative;
  width: 100%;
  text-decoration: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(2px);
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  border: 1px solid rgba(0, 0, 0, 0);
`;

const BlogAStyleBlock = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column-reverse;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;

const BlogListItem = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 960px;
  margin: 0px auto;
  @media (max-width: 756px) {
    padding: 2rem 2rem 4rem;
  }
`;

const BlogBlockText = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (max-width: 756px) {
    max-width: 100%;
  }
`;

const BlogBlockP = styled.p`
  margin-top: 0px;
  color: black;
  font-size: 36px;
`;

const BlogImg = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  @media (max-width: 756px) {
    object-position: left;
  }
`;

const BlogBlockImg = styled.div`
  height: 400px;
  width: 100%;
  @media (max-width: 756px) {
    height: 256px;
  }
`;
const BlogItemNews = ({ Component, pageProps }: Props) => {
  return(
    <>
            <BlogStyleBlock>
                <BlogAStyleBlock href="/blog/1/">
                    <BlogBlockText>
                      <BlogBlockP>Ouchi Finance Instruction</BlogBlockP>
                      <p>
                      MetaMask can be downloaded on Chrome and Firefox,
or on iOS and Android. We'll use the Chrome version
here, but the instructions will be more or less the
same for every platform.</p>
                      <p>September 16th, 2021 - 5 min read</p>
                    </BlogBlockText>
                    <BlogBlockImg>
                      <BlogImg src="/blog/blog1/title.jpg" />
                    </BlogBlockImg>
                </BlogAStyleBlock>
            </BlogStyleBlock>
    </>
  )
}
const BlogListNews = ({ Component, pageProps }: Props) => {
  return (
    <>
      <BlogListItem>
        <BlogItemNews />
      </BlogListItem>
    </>
  )
}


const Blog = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  const size = useWidth();

  return (
    <>
      <Head>
        <title>Ouchi Finance</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <body>
        <Main>
          {blurredDots.map(
            ({ src, alt, width, height, left, top, bottom, right }) => (
              <Img
                top={top[size]}
                bottom={bottom[size]}
                left={left[size]}
                width={width}
                height={height}
                right={right[size]}
              >
                <Image layout="fill" src={src} alt={alt} />
              </Img>
            ),
          )}
          <BlogTitle>
            <BlogText>
              Blog
            </BlogText>
            <NewsText>
              News, stories, and announcements from Ouchi Finance.<SubText>Subscribe</SubText>
            </NewsText>
          </BlogTitle>
          <BlogListNews />
      </Main>
    </body>
    </>
  );
};

export default Blog;
