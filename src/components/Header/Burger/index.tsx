import styled from 'styled-components';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import MyBtn from '@src/components/Button';
import disableScroll from 'disable-scroll';
import { device } from '@src/themes/sizes';

interface StyleProp {
  open: boolean;
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props: any) => props.theme.palette.primary.secondary};
  transform: ${({ open }: StyleProp) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  font-weight: 900;
  transition: transform 0.3s ease-in-out;
`;

const HeaderLinks = styled.a`
  font-family: FiraGO;
  width: 80%;
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  padding-bottom: .5rem;
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.primary};
`;

export const Links = [
  {
    label: 'App',
    link: 'https://app.ouchi.finance/#/home',
  },
  {
    label: 'Mission',
    link: 'https://ouchi.earth/english',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/ouchios',
  },
  {
    label: 'Docs',
    link: 'https://nodoka-zen.gitbook.io/ouchifinance/',
  },
];

export const Share = [
  {
    label: 'Twitter',
    link: 'https://twitter.com/OuchiFinance',
  },
  {
    label: 'Telegram',
    link: 'https://t.me/OuchiFinance',
  },
];

const Menu = ({ open }: StyleProp) => {
  disableScroll[open ? 'on' : 'off']();
  const { t } = useTranslation('common');
  return (
    <StyledMenu open={open}>
      {Links.map(({
        label,
        link,
      }) => (
        <HeaderLinks href={link} target="_blank" rel="noreferrer">
          {label}
        </HeaderLinks>
      ))}
      <div style={{ height: '3rem' }} />
      {Share.map(({
        label,
        link,
      }) => (
        <HeaderLinks href={link} target="_blank" rel="noreferrer">
          {label}
        </HeaderLinks>
      ))}
      <div style={{
        position: 'fixed',
        zIndex: 101,
        bottom: 18,
        right: 18,
      }}
      >
        <MyBtn width="200px" height="50px" fontSize="14px" radius="5px">
          {t('mainBtn')}
        </MyBtn>
      </div>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  @media (${device.xs}) {
    margin-top: .5rem;
    height: 1.5rem;
  }
  @media (${device.md}) {
    margin-top: 0;
    height: 2rem;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 36px;
    height: 0.25rem;
    background: ${(props: any) => props.theme.palette.primary.primary};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: StyleProp) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: StyleProp) => open ? '0' : '1'};
      transform: ${({ open }: StyleProp) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: StyleProp) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

interface MainT extends StyleProp {
  setOpen: (_arg0: boolean) => void;
}

export const Burger = ({
  open,
  setOpen,
}: MainT) => {
  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Menu;
