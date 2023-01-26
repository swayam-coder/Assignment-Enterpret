import { styled as MuiStyled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const StyledBox = MuiStyled(Box)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        width: '100%',
    }
}))

export const StyledGrid =  MuiStyled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        textAlign: 'center'
    }
}))