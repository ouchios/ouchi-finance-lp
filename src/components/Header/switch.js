import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ThemesEnum } from '@src/slices/themeSlice';
import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@src/themes/sizes';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 30,
    padding: 0,
    marginTop: 7,
    [theme.breakpoints.down('sm')]: {
      width: 23,
      height: 11.5,
    },
  },
  switchBase: {
    padding: 5,
    '&$checked': {
      transform: 'translateX(30px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'transparent',
        opacity: 1,
        border: `1px solid ${theme.palette.primary.primary}`,
      },
    },
    '&$focusVisible $thumb': {
      color: theme.palette.primary.primary,
      border: '6px solid #fff',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 2.25,
      '&$checked': {
        transform: 'translateX(11.5px)',
      },
      '&$focusVisible $thumb': {
        border: '3.5px solid #fff',
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    background: theme.palette.primary.primary,
    [theme.breakpoints.down('sm')]: {
      width: 6.5,
      height: 6.5,
    },
  },
  track: {
    borderRadius: 15,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({
  classes,
  ...props
}) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const LabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 14px;
  align-items: center;
  @media (${device.xs}) {
    width: 1rem;
  }
  @media (${device.md}) {
    width: 40px;
  }
`;

// eslint-disable-next-line react/prop-types
export default function ToggleTheme({ size }) {
  const { currentTheme } = useSelector(selectors.selectTheme);
  const dispatch = useDispatch();
  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);

  return (
    <FormControlLabel
      labelPlacement="top"
      control={(
        <IOSSwitch
          lite={currentTheme !== 'dark'}
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
          name="checkedB"
        />
      )}
      label={(
        <LabelDiv>
          <Image
            src="/sun.svg"
            alt="logo"
            width={size}
            height={size}
          />
          <Image
            src="/moon.svg"
            alt="logo"
            width={size}
            height={size}
          />
        </LabelDiv>
      )}
    />
  );
}
