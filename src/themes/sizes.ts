import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const size = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export const device = {
  xs: `min-width: ${size.xs}`,
  sm: `min-width: ${size.sm}`,
  md: `min-width: ${size.md}`,
  lg: `min-width: ${size.lg}`,
  xl: `min-width: ${size.xl}`,
};

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

export const useWidth = () => {
  const theme: any = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};
