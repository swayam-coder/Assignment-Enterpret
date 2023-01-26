import { styled as MuiStyled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbar = MuiStyled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'space-between'
    }
}))