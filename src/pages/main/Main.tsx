import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "./search-box.styled"
import DownloadIcon from '@mui/icons-material/Download';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { StyledBox, StyledGrid } from "./left-grid.styled"
import { StyledBox as RightStyleBox } from "./right-grid.styled"
import { BuildQueryButton, FeedBackButtons, MainGrid } from './Main.styled';
import PlaceHolders from '../../components/common/PlaceHolders';
import QueryBuilder from '../../components/query-builder/QueryBuilder';

export default function Main() {
    const theme = useTheme()
    const [open, setOpen] = React.useState<boolean>(false);

    function handleQueryBuilderOpen() {
      setOpen(true);
    }

    return (
      <MainGrid container sx={{ backgroundColor: theme.palette.primary.dark, height: "100vh" }}> 
          <StyledGrid item lg={3} xs={12}>
            <StyledBox sx={{ width: "200px", margin: "auto", py: "60px" }}>
              <Typography variant="h6">Build Your Query</Typography>
              <Typography variant="subtitle2" sx={{ my: 1, color: theme.palette.primary.contrastText }}>Narrow your search by further adding some filters</Typography>
              <BuildQueryButton onClick={handleQueryBuilderOpen}>
                <span>Build Query</span>
              </BuildQueryButton>
              <QueryBuilder open={open} setOpen={setOpen}/>
            </StyledBox>
          </StyledGrid>
          <Grid item lg={9} xs={12} sx={{ padding: "30px" }}>
            <RightStyleBox sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "white" }}/>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="small"
              />      
              <FeedBackButtons sx={{ backgroundColor: theme.palette.primary.main, width: { lg: "190px" } }}> <DownloadIcon /> Export Feedback</FeedBackButtons>
              <FeedBackButtons sx={{ backgroundColor: theme.palette.secondary.main, width: { lg: "190px" }}}> View Feedback </FeedBackButtons>
              <FeedBackButtons sx={{ backgroundColor: theme.palette.primary.main }}> <CalendarMonthIcon />  October 19, 2022 - October 28, 2022</FeedBackButtons>
            </RightStyleBox>
            <Box>    
                <PlaceHolders no={4} />
            </Box>
          </Grid>
        </MainGrid>
    )
}
