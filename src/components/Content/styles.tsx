import styled from 'styled-components';
import { device } from '@src/themes/sizes';

const ContentRoot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (${device.xs}) {
    margin-top: 49px;
  }
  @media (${device.md}) {
    margin-top: 114px;
  }
  @media (${device.lg}) {
    margin-top: 250px;
  }

  & > * {
    z-index: 2;
  }
`;

const TXT1 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  color: ${(props) => props.theme.palette.primary.pink};
  @media (${device.xs}) {
    font-size: 20px;
    margin-bottom: 30px;
  }
  @media (${device.sm}) {
    font-size: 36px;
    margin-bottom: 2rem;
  }
  @media (${device.md}) {
    font-size: 48px;
  }
  @media (${device.lg}) {
    font-size: 72px;
    margin-bottom: 90px;
  }
  @media (${device.xl}) {
    font-size: 96px;
  }
`;

const MainButton = styled.div`
  @media (${device.xs}) {
    margin-top: 30px;
  }
  @media (${device.sm}) {
    margin-top: 2rem;
  }
  @media (${device.lg}) {
    margin-top: 90px;
  }
`;
const TXT2 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  line-height: normal;
  @media (${device.xs}) {
    font-size: 12px;
    text-align: center;
    width: 98%;
  }
  @media (${device.sm}) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (${device.md}) {
    font-size: 18px;
    width: 43%;
  }
  @media (${device.lg}) {
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;
const CenterMain = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 20px;
  color: ${(props: any) => props.theme.palette.primary.primary};
  opacity: ${(props: any) => props.opacity || 1};
  @media (${device.xs}) {
    font-size: 20px;
    margin-right: 5px;
  }
  @media (${device.sm}) {
    margin-right: 5px;
    font-size: 20px;
  }
  @media (${device.md}) {
    margin-right: 5px;
    font-size: 34px;
  }
  @media (${device.lg}) {
    margin-right: 5px;
    font-size: 58px;
  }
  @media (${device.xl}) {
    font-size: 80px;
  }
`;
const CenterDesc = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.xs}) {
    font-size: 10px;
    margin-top: 0.5rem;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 12px;
  }
  @media (${device.md}) {
    font-size: 18px;
  }
  @media (${device.lg}) {
    margin-top: 1rem;
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;
const CenterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (${device.xs}) {
    margin-top: 55px;
    align-items: center;
    padding: 0 2rem;
  }
  @media (${device.sm}) {
    padding: 0 200px;
    margin-top: 150px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media (${device.md}) {
    padding: 0 240px;
    margin-top: 200px;
  }
  @media (${device.lg}) {
    padding: 0 280px;
    margin-top: 220px;
  }
  @media (${device.xl}) {
    padding: 0 340px;
    margin-top: 266px;
  }
`;
const CenterContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LearnBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (${device.xs}) {
    margin-top: 70px;
    text-align: center;
  }
  @media (${device.sm}) {
    margin-top: 100px;
  }
  @media (${device.md}) {
    margin-top: 180px;
  }
  @media (${device.lg}) {
    margin-top: 220px;
  }
  @media (${device.xl}) {
    margin-top: 250px;
  }
`;
const LearnTitle = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: normal;
  color: ${(props) => props.theme.palette.primary.yellow};
  @media (${device.xs}) {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
  @media (${device.sm}) {
    font-size: 36px;
    margin-bottom: 1.5rem;
  }
  @media (${device.md}) {
    margin-bottom: 2rem;
    font-size: 48px;
  }
  @media (${device.lg}) {
    margin-bottom: 3rem;
    font-size: 90px;
  }
  @media (${device.xl}) {
    font-size: 96px;
  }
`;
const LearnDesc = styled.span`
  margin: 0 auto;
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  @media (${device.xs}) {
    font-size: 12px;
    width: 98%;
  }
  @media (${device.sm}) {
    font-size: 12px;
    width: 100%;
  }
  @media (${device.md}) {
    font-size: 18px;
    width: 70%;
  }
  @media (${device.lg}) {
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    padding: 0;
    gap: 32px;
    margin-top: 30px;
    flex-direction: column;
  }
  @media (${device.sm}) {
    padding: 0;
    gap: 32px;
    margin-top: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 0 100px;
    gap: 75px;
  }
  @media (${device.md}) {
    padding: 0 100px;
    gap: 100px;
    flex-direction: row;
    display: flex;
  }
  @media (${device.lg}) {
    padding: 0 100px;
    gap: 160px;
    margin-top: 90px;
  }
  @media (${device.xl}) {
    padding: 0 100px;
    gap: 212px;
  }
`;

const CardsOutter = styled.div`
  background: ${(props: any) => props.theme.palette.cards[props.type]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-height: 300px;
  max-width: 300px;
  @media (${device.xs}) {
    width: 200px;
    max-width: 230px;
    height: 200px;
    padding: 1rem 0;
  }
  @media (${device.sm}) {
    width: 200px;
    max-width: 250px;
    height: 200px;
    padding: 1rem 0;
  }
  @media (min-width: 1024px) {
    width: 220px;
    height: 220px;
    padding: 1rem 0;
  }
  @media (${device.md}) {
    margin: 0;
    max-width: 300px;
    width: 220px;
    padding: 1.5rem 0;
    height: 220px;
  }
  @media (${device.lg}) {
    width: 300px;
    height: 300px;
    padding: 2rem 0;
  }
  @media (${device.xl}) {
    width: 300px;
    height: 300px;
    padding: 2rem 0;
  }
`;
const CardsTxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props: any) => (props.type === 'important' ? '#fff' : '#42B7A0')};
  @media (${device.xs}) {
    font-size: 18px;
    padding-bottom: 1rem;
  }
  @media (${device.sm}) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 0;
    font-size: 28px;
  }
  @media (${device.lg}) {
    padding-bottom: 0;
    font-size: 32px;
  }
  @media (${device.xl}) {
    font-size: 36px;
  }
`;

const ImgOutter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media (${device.xs}) {
    width: 100.93px;
    height: 100.65px;
    margin-bottom: 10px;
  }
  @media (${device.sm}) {
    width: 100.93px;
    height: 100.65px;
    margin-bottom: 10px;
  }
  @media (${device.md}) {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }
  @media (${device.lg}) {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }
  @media (${device.xl}) {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }
`;

const JoinUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const JoinUsInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    gap: 40px;
    margin-top: 1.5rem;
  }
  @media (${device.sm}) {
    gap: 40px;
    margin-top: 1.5rem;
  }
  @media (${device.md}) {
    gap: 60px;
  }
  @media (${device.lg}) {
    margin-top: 90px;
    gap: 209px;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (${device.xs}) {
    margin-top: 50px;
    margin-bottom: 10px;
  }
  @media (${device.sm}) {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  @media (${device.md}) {
    margin-top: 160px;
    margin-bottom: 40px;
  }
  @media (${device.lg}) {
    margin-top: 180px;
    margin-bottom: 50px;
  }
  @media (${device.xl}) {
    margin-top: 242px;
    margin-bottom: 108px;
  }
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    gap: 8px;
  }
  @media (${device.md}) {
    gap: 18px;
  }
`;

const FooterTxt = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (${device.xs}) {
    font-size: 12px;
  }
  @media (${device.sm}) {
    font-size: 12px;
  }
  @media (${device.md}) {
    font-size: 18px;
  }
  @media (${device.lg}) {
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;

export {
  ContentRoot,
  TXT1,
  TXT2,
  CenterMain,
  CenterDesc,
  CenterContainer,
  CenterContainerInner,
  LearnBlock,
  LearnTitle,
  LearnDesc,
  CardsBlock,
  CardsOutter,
  CardsTxT,
  ImgOutter,
  JoinUs,
  JoinUsInner,
  FooterDiv,
  FooterInner,
  FooterTxt,
  MainButton,
};
