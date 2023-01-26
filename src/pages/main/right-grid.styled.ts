import { styled as MuiStyled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = MuiStyled(Box)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        '> *': {
            margin: "10px 0"
        }
    }
}))