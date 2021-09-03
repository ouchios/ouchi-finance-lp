import Header from '@src/components/Header';
import React from 'react';
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

function MainPage() {
  const size = useWidth();
  return (
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
      <Header />
      <Content />
    </Main>
  );
}

export default MainPage;
