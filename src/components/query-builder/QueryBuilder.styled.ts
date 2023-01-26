import { styled as MuiStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { BuilderModal } from "../common/common.styled";

export const QueryBuilderModal = MuiStyled(BuilderModal)(`
    .MuiBackdrop-root {
        background-color: #1D2025
    }
`);

export const ModalHeader = MuiStyled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const AddFilterButton = MuiStyled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  width: "110px",
  height: "38px",
  fontSize: "small",
}));

export const CopyButton = MuiStyled(Button)(({ theme }) => ({
  position: "absolute",
  top: "130px",
  right: "30px",
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  borderRadius: "6px",

  [theme.breakpoints.down("md")]: {
    right: "10px"
  },
}));
