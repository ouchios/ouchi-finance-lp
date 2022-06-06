import React, { useMemo } from 'react';
import MyBtn from '@src/components/Button';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import JoinButton from '@src/components/Content/JoinButton';
import { useWidth } from '@src/themes/sizes';

import {
  CardsBlock,
  CardsOutter,
  CardsTxT,
  CenterContainer,
  CenterContainerInner,
  CenterDesc,
  CenterMain,
  ContentRoot,
  FooterDiv,
  FooterInner,
  FooterTxt,
  ImgOutter,
  JoinUs,
  JoinUsInner,
  LearnBlock,
  LearnDesc,
  LearnTitle,
  TXT1,
  TXT2,
  MainButton,
} from './styles';
import { get_API_JSON } from '@src/utils/api_req';

const cards = [
  {
    title: 'Our Mission',
    img: '/cards/our-mission.svg',
    type: 'ordinary',
    size: 196,
  },
  {
    title: 'Application',
    img: '/cards/application.svg',
    type: 'important',
    size: 262,
  },
  {
    title: 'Ouchi Token',
    img: '/cards/ouchi-token.svg',
    type: 'ordinary',
    size: 234,
  },
];

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return {
        w: '130px',
        h: '40px',
        f: '10px',
        copyR: '20px',
      };
    case 'sm':
      return {
        w: '250px',
        h: '60px',
        f: '14px',
        copyR: '24px',
      };
    case 'md':
      return {
        w: '300px',
        h: '70px',
        f: '18px',
        copyR: '25px',
      };
    case 'lg':
      return {
        w: '420px',
        h: '90px',
        f: '32px',
        copyR: '29px',
      };
    default:
      return {
        w: '493px',
        h: '128px',
        f: '48px',
        copyR: '29px',
      };
  }
};

const Content = () => {
  const { t } = useTranslation('common');
  const width = useWidth();
  const sizes = useMemo(() => chooseSize(width), [width]);

  let json_resp_ouchi = get_API_JSON('https://api.neins.finance/ouchi/info');

  let TVl = '0';
  let usd_price = '0';
  let APR = '0';

  if (json_resp_ouchi !== undefined) {
    TVl = json_resp_ouchi.tvl;
    APR = json_resp_ouchi.apr;
    usd_price = json_resp_ouchi.price;
  }

  return (
    <ContentRoot>
      <TXT1>A Revolutionary DEX</TXT1>
      <TXT2>
        {`A trustful farming platform guaranteed by 
        Ethereum validator staking You don't 
        need to wait for the end of Ethereum validator staking 
        any more Enjoy Defi activities with Ouchi Finance!`}
      </TXT2>
      <MainButton>
        <MyBtn
          href="https://app.ouchi.finance/#/home"
          width={sizes.w}
          height={sizes.h}
          fontSize={sizes.f}
          radius="15px"
        >
          {t('mainBtn')}
        </MyBtn>
      </MainButton>
      <LearnBlock>
        <LearnTitle>Learn Ouchi Finance</LearnTitle>
        <LearnDesc>
          {`We are building a network in the global scale based on the mutual aid with a value put on trust and 
            empathy Our community is "an Ouchi (a safe house)" for you in the digital world`}
        </LearnDesc>
        <LearnDesc>
          We will be a platform for you to deal in rights, guaranteed with NFT,
          to live in an Ouchi even in the real world in the future.
        </LearnDesc>
      </LearnBlock>
      <CardsBlock>
        {cards.map(({ title, img, type, size }) => (
          <>
            {/* @ts-ignore */}
            <CardsOutter type={type} key={title}>
              {/* @ts-ignore */}
              <CardsTxT type={type}>{title}</CardsTxT>
              <ImgOutter>
                <Image src={img} alt={title} width={size} height={size} />
              </ImgOutter>
            </CardsOutter>
          </>
        ))}
      </CardsBlock>
      <LearnBlock>
        <LearnTitle
          style={{
            color: '#EDC39B',
          }}
        >
          Our Community
        </LearnTitle>
        <LearnDesc
          style={{
            width: '100%',
          }}
        >
          Feel free to contact the team, Enjoy chatting with others in the
          community.
        </LearnDesc>
      </LearnBlock>
      <JoinUs>
        <JoinUsInner>
          <JoinButton
            link="https://twitter.com/OuchiFinance"
            icon="/twitter.svg"
          >
            Twitter
          </JoinButton>
          <JoinButton link="https://t.me/OuchiFinance" icon="/telegram.svg">
            Telegram
          </JoinButton>
        </JoinUsInner>
      </JoinUs>
      <FooterDiv>
        <FooterInner>
          <Image
            src="/copy-rights.svg"
            alt="copy-rights"
            width={sizes.copyR}
            height={sizes.copyR}
          />
          <FooterTxt>2021 Ouchi Finance</FooterTxt>
        </FooterInner>
      </FooterDiv>
    </ContentRoot>
  );
};

export default Content;
