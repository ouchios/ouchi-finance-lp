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

const BlogTitle = styled.div`
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 550px;
  padding: 4rem 0px 0rem;
  @media (max-width: 756px) {
    min-width: 0;
  }
`;

const BlogImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 500ms ease 0s;
`;

const BlogBlockImg = styled.div`
  width: 100vw;
  height: 470px;
  @media (max-width: 756px) {
    height: 256px;
  }
`;

const Contenier = styled.div`
  z-index: 1;
  min-width: 960px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto 2rem;
  text-decoration: none;
  @media (max-width: 756px) {
    min-width: 0;
    padding: 15px;
  }
  `;
const LinkToBlog = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: rgb(86, 90, 105);
`;
const H1BlogPage = styled.h1`
  font-size: 72px;
  margin: 0.5rem 0px 1rem;
  pointer-events: none;
  overflow-wrap: normal;
  max-width: 900px;
  @media (max-width: 756px) {
    font-size: 64px;
  }
`;
const TextABlogTime = styled.div`
  margin: 0px;
  color: rgb(86, 90, 105);
`;
const ContenierPostContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 180px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 48px;
  padding: 2rem 2rem 4rem;
  margin-bottom: 4rem;
  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin: 0rem;
    padding: 0px;
    gap: 0px;
  }
`;
const ContenierPostContentContenier = styled.div`
  min-width: 640px;
  max-width: 640px;
  padding: 0px;
  margin-bottom: 3rem;
  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
    margin-left: 0px;
  }
`;

const TextP = styled.p`
  padding: 0;
  margin: 0 0 1.45rem;
`;
const TextUL = styled.ul`
  padding: 0;
  margin: 0 0 1.45rem 1.45rem;
  list-style-position: outside;
  list-style-image: none;
`;
const TextH1 = styled.h1`
  position: relative;
  margin-top: 4rem;
  color: #42B7A0;

`;
const TextLink = styled.a`
  padding: 0;
  margin: 0 0 1.45rem;
  color: #42B7A0;
  text-decoration: underline;
`;

const TextBold = styled.p`
  padding: 0;
  margin: 0 0 1.45rem;
  color: black;
  font-weight: bold;
`;
const TextImg = styled.img`
  position: relative;
  width: 50%;
  margin: 20px auto;
  bottom: 0px;
  left: 0px;
  display: block;
  @media (max-width: 756px) {
    width: 100%;
  }
`;
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
          <BlogBlockImg>
            <BlogImg src="/blog/blog1/title.jpg" />
          </BlogBlockImg>
          <Contenier>
            <BlogTitle>
              <LinkToBlog href="/blog">Blog</LinkToBlog>
              <H1BlogPage>Ouchi Finance Instruction</H1BlogPage>
              <TextABlogTime>September 16th, 2021</TextABlogTime>
            </BlogTitle>
            <ContenierPostContent>
              <ContenierPostContentContenier>

                <TextH1>Let’s start by installing MetaMask.</TextH1>
                <TextP>MetaMask can be downloaded on Chrome and Firefox,
or on iOS and Android. We'll use the Chrome version
here, but the instructions will be more or less the
same for every platform.</TextP>
                <TextP>Firstly, you’ll want to head over to the MetaMask <TextLink href="#">Download page.</TextLink></TextP>
                <TextP>From there, select whichever platform you’re using,
and follow the steps to install it on your device.
Next, follow along with the setup specified by the app.
Go ahead and click Create a Wallet. Write down the
backup seed phrase somewhere secret. Without this
phrase, your funds can’t be recovered if your device is
damaged or lost. Confirm that you’ve written them
down on the next page.
And that’s it! You should now see your wallet, ready to
send and receive funds.</TextP>
                <TextP>The MetaMask wallet window</TextP>

                <TextH1>The MetaMask wallet window</TextH1>
                <TextImg src="/blog/blog1/metamask.png"/>
                <TextP>You might notice straight away that we’re still dealing
  with an Ethereum wallet. At best, this won’t work with
  Ouchi Finance. At worst, you could lose funds by sending
  them to addresses you can’t actually use.</TextP>
                <TextP>Let’s change that. We want to access the Settings
  to point the wallet towards Nodoka Chain nodes.</TextP>

                <TextH1>Click “Ethereum Mainnet”
  and select “Custom RPC”.</TextH1>
                <TextImg src="/blog/blog1/net.png"/>
                <TextP>You might notice straight away that we’re still dealing
with an Ethereum wallet. At best, this won’t work with
Ouchi Finance. At worst, you could lose funds by sending
them to addresses you can’t actually use.</TextP>
                <TextP>Let’s change that. We want to access the Settings
to point the wallet towards Nodoka Chain nodes.</TextP>

                <TextH1>Input Nodoka Mainnet information.</TextH1>
                <TextImg src="/blog/blog1/nodoka.png"/>
                <TextP>Below are the parameters to fill in for each. Make sure
not to make a mistake! Then click “Save”.</TextP>
                <TextP>Nodoka Mainnet<br />
                      RPC: <TextLink>https://chain.nodoka.network</TextLink><br />
                      chainID: 56789<br />
                      Symbol: NETH<br />
                      explorer: <TextLink>https://scan.chain.nodoka.network/</TextLink></TextP>
                  
                  <TextH1>Your MetaMask got to work
on Nodoka Mainnet now.</TextH1>
                  <TextImg src="/blog/blog1/balance.png"/>
                  <TextP>You need to move (bridge) your tokens to the Nodoka
chain next because Ouchi Finance is an application
on Nodoka chain.</TextP>
                  <TextP>Access Nodoka Bridge (URL: XXXXXXXXXXXXXXX)</TextP>
                  <TextP>First of all, you need to connect your wallet
with Nodoka Bridge.</TextP>

                  <TextH1>Click “Connect Wallet”</TextH1>
                  <TextImg src="/blog/blog1/connect1.png"/>
                  <TextP>Select MetaMask</TextP>
                  <TextImg src="/blog/blog1/connect2.png"/>
                  <TextP>Find a token you want to move to Nodoka chain.</TextP>
                  <TextP>Then input amount and click “Next” and “Confirm”.</TextP>

                  <TextH1>Congrats! You are all set to start using Ouchi Finance!</TextH1>
                  <TextP>First, go to the Landing Page from the link below.<br/>
                        <TextLink>https://ouchi.finance/</TextLink><br/>
                        You can get to know the latest info about Ouchi Finace from here!
                  </TextP>
                  <TextP>If you are too lazy to check the page regularly, following
the Ouchi Finance twitter and join the telegram group
are good way to keep up.</TextP>

                  <TextH1>Click “Enter App” at the center or top right
of the page to start your life with Defi!</TextH1>
                  <TextImg src="/blog/blog1/ouchifinancehome.png"/>
                  <TextP>Then, connect your wallet with Ouchi Finance
in the same way you did with Nodoka Bridge.</TextP>
                  <TextP>When you click “Swap” on the left bar,
                  you’ll see the swap page.
                  </TextP>
                  <TextP>You can select which token you swap and how much.</TextP>
                  <TextP>Then you click “Swap”.</TextP>
                  <TextP>Your MetaMast wallet will show a window
to ask you to confirm the transaction</TextP>
                  <TextP>Click “Confirm” to complete your swap!</TextP>
                  <TextP>Note: I guess you want to receive tokens immediately,
but transactions will take a few seconds or minutes.
Don’t worry, just wait for it.</TextP>

                  <TextH1>You can enjoy rewards by contributing
to Ouchi Finance!</TextH1>
                  <TextP>You may get interested in Liquidity and Stake.</TextP>
                  <TextBold>You can enjoy rewards by contributing to Ouchi Finance!</TextBold>
                  <TextP>Click “Confirm Adding Liquidity”and “Confirm Supply”.</TextP>
                  <TextP>MetaMask will ask you to “Confirm” again</TextP>
                  <TextBold>You’ve successfully added liquidity to the token pair
on Ouchi Finance!</TextBold>
                  <TextP>You can also remove liquidity by clicking “Remove”.
Input amount you want to remove and click “Confirm”.</TextP>
                  <TextP>The LP tokens will be used to join “Farming”.
                    We expect it to give us more attractive rewards than
                    staking (though it hasn’t released yet).
                  </TextP>
                  <TextP>Note: you may be asked to “Approve” the LP token
if you try this for the first time. Please just approve.</TextP>

                  <TextH1>Instead of Farming, we can enjoy
staking at the moment.</TextH1>
                  <TextP>It’s simple. You rock your token on the platform
then enjoy rewards (You’ll receive it as Ouchi).</TextP>
                  <TextP>Ouchi can be used for farming in the future.
Note: See the whitepaper if you want to learn more.</TextP>

                <TextH1>You open the door to your Defi life
with OuchiFinance.</TextH1>
                <TextP>I’ll update the page regularly, so stay tuned!</TextP>
                <TextP>Thank you so much for reading my blog...</TextP>
              </ContenierPostContentContenier>
            </ContenierPostContent>
          </Contenier>
      </Main>
    </body>
    </>
  );
};

export default Blog;