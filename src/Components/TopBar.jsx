import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../Assets/atlas-logo-white.png"
const drawerWidth = 240;
const menuItems = ['Home', 'NFT', 'PITCH DECK', 'Search'];

function TopBar(props) {
  const { window } = props;
  const { selected } = props;
  console.log(selected)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: 'center', backgroundColor: '#01001F', height:'100vh'}}>
      {/* <Divider /> */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:'white' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            sx={{ 
              textAlign: 'center', 
              color:'white',  
              background : 'linear-gradient(260.52deg,#0026f4 -25.59%,rgba(0,249,255,0) 143.07%)'
            }}>
            <ListItemText primary="CONNECT TO WALLET" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height:{ xs:'64px', sm :'64px', md:'64px'},  }}>
      <AppBar component="nav" 
        sx={{
          backgroundColor : "#01001F", 
          padding : { md:"0 30px", xs:"0 10px"},
          height:{ sm :'64px', md:'64px'} }}>
        <Toolbar>
          <Box
            component="img"
            alt="logo"
            src={Logo}
            sx={{flexGrow: 1, maxWidth: {xs:175, md:175}}}
          />
          <Typography
            variant="h6"
            component="div"
            align='left'
            sx={{ flexGrow: 1 }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', fontWeight:'bold' } }}>
            {menuItems.map((item, index) => (
              <Button key={index}
                sx={ 
                  index == selected ? 
                  { color: '#00e0ff', height: '64px', fontWeight:'bold', margin:'0 10px' } 
                  :
                  { color: '#fff', height: '64px', fontWeight:'bold', margin:'0 10px' }
                }
              >
                {item}
              </Button>
            ))}
            <Button
              sx={{ 
                color: '#fff', 
                height: '64px', 
                background : 'linear-gradient(260.52deg,#0026f4 -25.59%,rgba(0,249,255,0) 143.07%)',
                fontWeight:'bold',
                margin:'0 10px' }}
            >
              CONNECT TO WALLET
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

TopBar.propTypes = {
  window: PropTypes.func,
};

export default TopBar;