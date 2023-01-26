import { styled as MuiStyled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default MuiStyled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: "1px solid #404348",
    borderRadius: "4px",
    [theme.breakpoints.down('lg')]: {
        margin: '10px 0'
    }
}));