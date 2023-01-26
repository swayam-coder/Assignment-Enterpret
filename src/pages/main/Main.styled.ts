import { styled as MuiStyled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const MainGrid =  MuiStyled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        height: "100%"
    }
}))

export const FeedBackButtons = MuiStyled(Button)(({ theme }) => ({
    color: 'white',
    fontSize: "small",
    [theme.breakpoints.down('lg')]: {
        margin: '10px 0'
    }
}))

export const BuildQueryButton = MuiStyled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, 
    color: 'white' ,
    width: "142px",
    height: "44px",
    fontSize: "small"
}))