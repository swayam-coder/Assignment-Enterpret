import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/Group-1.webp'
import NavButton1 from '../../assets/Frame-1.webp'
import NavButton2 from '../../assets/Frame-3.webp'
import NavButton3 from '../../assets/Frame-2.webp'
import AvatarImg from '../../assets/Avatars.webp'
import { styled as MuiStyled } from '@mui/material/styles';
import { StyledToolbar } from './Navbar.styled';

const pages = [NavButton1, NavButton2, NavButton3];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppBar2 = MuiStyled(AppBar)(({ theme }) => ({
    boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);",
    backgroundColor: theme.palette.primary.main,
    position: 'relative'
}));

function Navbar() {
  const [profileOptions, setProfileOptions] = React.useState<boolean>(false);

  return (
    <AppBar2 position="static"> 
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <img src={Logo} alt="logo" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: "20px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ mt: 2, mb: 1, color: 'white', display: 'block' }}
              >
                <img src={page} alt="navoptions"/>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} onClick={() => setProfileOptions(curr => !curr)}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={AvatarImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={profileOptions}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center" color="black">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar2>
  );
}
export default Navbar;
