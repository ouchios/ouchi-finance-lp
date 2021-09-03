import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Image from 'next/image';
import { device, useWidth } from '@src/themes/sizes';

const MyButton = styled(Button)`
  background: ${(props) => props.theme.palette.cards.ordinary};
  box-shadow: ${(props) => props.theme.palette.cards.shadow};
  border-radius: 40px;
  @media (${device.xs}) {
   padding: 10px 20px;
    width: 122px;
    height: 42px;
  }
  @media (${device.sm}) {
    padding: 0;
    width: 250.99px;
    height: 75.51px;
  }
  @media (${device.md}) {
    width: 280px;
    height: 88px;
  }
  @media (${device.lg}) {
    width: 350px;
    height: 112px;
  }
  @media (${device.xl}) {
    width: 377px;
    height: 129px;
  }
`;

const TxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.grey};
  @media (${device.xs}) {
    font-size: 12px;
    margin-left: 0;
  }
  @media (${device.sm}) {
    font-size: 24px;
    margin-left: 18px;
  }
  @media (${device.md}) {
    font-size: 32px;
    margin-left: 32px;
  }
  @media (${device.lg}) {
    font-size: 36px;
    margin-left: 50px;
  }
  @media (${device.xl}) {
    font-size: 36px;
    margin-left: 50px;
  }
`;

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 24;
    case 'sm':
      return 28;
    case 'md':
      return 40;
    case 'lg':
      return 50;
    case 'xl':
      return 70;
    default:
      return 100;
  }
};

const Link = styled.a`
  text-decoration: none;
`;

const JoinButton = ({
  children,
  icon,
  link,
  ...props
}: any) => {
  const width = useWidth();

  const size = useMemo(() => chooseSize(width), [width]);

  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <MyButton
        {...props}
        startIcon={<Image src={icon} alt="icon" width={size} height={size} />}
      >
        <TxT>{children}</TxT>
      </MyButton>
    </Link>
  );
};

export default JoinButton;
