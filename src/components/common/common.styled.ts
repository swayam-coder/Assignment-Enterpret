import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { styled as MuiStyled, Theme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const BuilderModal = MuiStyled(Modal)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '90%',
    width: '80%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: 'scroll',
    cursor: 'default',
    scrollbarWidth:'none',

    '&::-webkit-scrollbar': {
        display: "none"
    }
}))

export const CloseModal = MuiStyled(CloseIcon) (({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    borderRadius: "6px"
}))

export const PlaceHolderPaper = MuiStyled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    margin: "30px 0",
    position: 'relative',
    backgroundColor: theme.palette.primary.main
}))