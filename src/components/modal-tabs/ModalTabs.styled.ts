import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled as MuiStyled } from '@mui/material/styles';

export const AntTab = MuiStyled(Tab)(
    ({ theme }) => ({
      textTransform: 'none',
      minWidth: 0,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
      },
      marginRight: theme.spacing(1),
      color: 'rgba(0, 0, 0, 0.85)',
      '&.Mui-selected': {
        color: "#1890ff",
      },
    }),
  );

export const AntTabs = MuiStyled(Tabs)(({ theme }) => ({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: "#1890ff",
    },
}))