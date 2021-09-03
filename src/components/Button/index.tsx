import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface ThemeTypes {
  theme: {
    palette: {
      gradients: {
        main: string;
      };
    };
  };
}

interface BtnTypes extends ThemeTypes {
  width: string;
  height: string;
  fontSize: string;
  radius: string;
}

const MyButton = styled(Button)`
  background: ${(props: BtnTypes) => props.theme.palette.gradients.main};
  border-radius: ${(props: BtnTypes) => props.radius || '6px'};
  width: ${(props: BtnTypes) => props.width || '297px'};
  height: ${(props: BtnTypes) => props.height || '66px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 12px;
  color: #ffffff;
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props: BtnTypes) => props.fontSize || '24px'};
  line-height: normal;
`;

const MyBtn = ({ children, ...props }: any) => {
  return <MyButton {...props}>{children}</MyButton>;
};

export default MyBtn;
