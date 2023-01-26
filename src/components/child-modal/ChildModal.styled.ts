import { styled as MuiStyled } from "@mui/material/styles";
import { BuilderModal } from "../common/common.styled";

export const ChildQueryBuilderModal = MuiStyled(BuilderModal)(({ theme }) => ({
    height: "60%",
    width: "50%",
    backgroundColor: "#1D2025",

    [theme.breakpoints.down("md")]: {
        right: "10px",
        width: "70%"
    },
}));