import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ThemesEnum } from '@src/slices/themeSlice';
import MyBtn from '@src/components/Button';
import useTranslation from 'next-translate/useTranslation';
import { device, useWidth } from '@src/themes/sizes';
import Menu, { Burger } from '@src/components/Header/Burger';
import ToggleTheme from '@src/components/Header/switch';

const Mobile = styled.div`
  @media (${device.xs}) {
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    border-bottom: none;
    margin-top: 12px;
  }
  @media (${device.md}) {
    display: none;
    height: 80px;
  }
  & > * {
    z-index: 3;
  }
`;

const ThemeAndBurger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  @media (${device.xs}) {
    gap: 0.5rem;
  }
  @media (${device.md}) {
    gap: 20px;
  }
`;
const MobileMenu = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRoot = styled.div`
  grid-template-columns: 1fr 3fr;
  border-bottom: 2px solid ${(props) => props.theme.palette.primary.lightGrey};
  @media (${device.xs}) {
    display: none;
  }
  @media (${device.md}) {
    display: grid;
    height: 169px;
  }
  @media (${device.lg}) {
    height: 218px;
  }
`;
const First = styled.div`
  padding-left: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (${device.sm}) {
    height: 120px;
    gap: 14px;
  }
  @media (${device.md}) {
    height: 169px;
    gap: 18px;
  }
  @media (${device.lg}) {
    height: 218px;
    gap: 21px;
  }
`;
const Last = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 27px;
  align-items: center;
  @media (${device.sm}) {
    height: 120px;
    gap: 25px;
  }
  @media (max-width: 1400px) {
    height: 169px;
    gap: 25px;
  }
  @media (${device.lg}) {
    height: 218px;
    gap: 45px;
  }
`;

const HeaderLinks = styled.a`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 14px;
    line-height: normal;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 24px;
    line-height: 30px;
  }
`;
const HeaderLinksSoc = styled.a`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  text-decoration: none;
  margin-top: 5px;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 24px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;
const Title = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.blue};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: normal;
  }
  @media (${device.xl}) {
    font-size: 36px;
    line-height: 30px;
  }
`;

const ThemeOuter = styled.span`
  @media (${device.xs}) {
    margin-bottom: 2.5px;
  }
  @media (${device.md}) {
    font-size: 1rem;
  }
`;
const MobileTitle = styled.span`
  display: flex;
  column-gap: 8.1px;
  justify-content: space-between;
  align-items: center;
`;

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return {
        soc: {
          h: 24,
          w: 32,
        },
        icon: 5,
        main: 24,
        font: '12px',
      };
    case 'sm':
      return {
        soc: {
          h: 24,
          w: 32,
        },
        icon: 5,
        main: 24,
        font: '18px',
      };
    case 'md':
      return {
        soc: {
          h: 28,
          w: 40,
        },
        icon: 13,
        main: 100,
        font: '22px',
      };
    case 'lg':
      return {
        soc: {
          h: 28,
          w: 40,
        },
        icon: 13,
        main: 112,
        font: '22px',
      };
    default:
      return {
        soc: {
          h: 28,
          w: 40,
        },
        icon: 13,
        main: 112,
        font: '24px',
      };
  }
};

export const Links = [
  // {
  //   label: 'App',
  //   link: 'https://app.ouchi.finance/#/home',
  // },
  {
    label: 'Mission',
    link: 'https://ouchi.earth/english',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/ouchios',
  },
  // {
  //   label: 'Docs',
  //   link: 'https://nodoka-zen.gitbook.io/ouchifinance/',
  // },
  {
    label: 'Blog',
    link: '/blog',
  }
];

const Header = () => {
  const width = useWidth();
  const size = useMemo(() => chooseSize(width), [width]);

  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectors.selectTheme);
  const { t } = useTranslation('common');

  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeaderRoot>
        <First>
          <Image
            src="/img.png"
            alt="logo"
            width={size.main}
            height={size.main}
          />
          <Title>{t('title')}</Title>
        </First>
        <Last>
          {Links.map(({ link, label }) => (
            <HeaderLinks href={link} target="_blank" rel="noreferrer">
              {label}
            </HeaderLinks>
          ))}
          <HeaderLinksSoc
            href="https://staking.neth.network/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/staking_neth.svg"
              alt="staking.neth.network"
              width={size.soc.w}
              height={30}
            />
          </HeaderLinksSoc>
          <HeaderLinksSoc
            href="https://twitter.com/OuchiFinance"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/twitter.svg"
              alt="twitter"
              width={size.soc.w}
              height={size.soc.h}
            />
          </HeaderLinksSoc>
          <HeaderLinksSoc
            href="https://t.me/OuchiFinance"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/telegram.svg"
              alt="telegram"
              width={size.soc.w}
              height={size.soc.h}
            />
          </HeaderLinksSoc>
          <div
            style={{
              marginLeft: 16,
              marginRight: 2,
            }}
          >
            <ToggleTheme size={size.icon} />
          </div>
          <MyBtn href="https://app.ouchi.finance/#/home" fontSize={size.font}>
            {t('mainBtn')}
          </MyBtn>
        </Last>
      </HeaderRoot>
      <Mobile>
        <MobileTitle>
          <Image
            src="/img.png"
            alt="logo"
            width={size.main}
            height={size.main}
          />
          <Title>{t('title')}</Title>
        </MobileTitle>
        <MobileMenu>
          <ThemeAndBurger>
            <ThemeOuter>
              <ToggleTheme size={size.icon} />
            </ThemeOuter>
            <div>
              <Menu open={open} />
              <Burger open={open} setOpen={setOpen} />
            </div>
          </ThemeAndBurger>
        </MobileMenu>
      </Mobile>
    </>
  );
};

export default Header;
