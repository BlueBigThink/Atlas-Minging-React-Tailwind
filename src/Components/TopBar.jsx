import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
const drawerWidth = '400px';
const menuItems = ['Home', 'NFT', 'PITCH DECK', 'Search'];
const linkTo = ['/', '/nft', '/', '/search'];

function TopBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const { selected } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const handleMenu = (e) => {
    const id = parseInt(e.target.value);
    navigate(linkTo[id]);
  }

  const drawer = (
    <Box onClick={handleMenuToggle} sx={{ textAlign: 'center', backgroundColor: '#01001F', height:'100vh', padding:'50px'}}>
      {/* <Divider /> */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item}>
            <Button 
              sx={
                index == selected ? 
                { color: '#00e0ff', fontWeight:'bold', textAlign:'center', width:'100%'}
                :
                { color: '#fff', fontWeight:'bold', textAlign:'center', width:'100%'}
              }
              value={index} 
              onClick={handleMenu}
            >
              {item}
            </Button>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton 
            sx={{ 
              textAlign: 'center', 
              color:'white',  
              background : 'linear-gradient(260.52deg,#0026f4 -25.59%,rgba(0,249,255,0) 143.07%)'
            }}>
            <Typography sx={{fontWeight:'bold', textAlign:'center', width:'100%'}}>CONNECT TO WALLET</Typography>
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
              <Button key={index} value={index}
                sx={ 
                  index == selected ? 
                  { color: '#00e0ff', height: '64px', fontWeight:'bold', margin:'0 10px' } 
                  :
                  { color: '#fff', height: '64px', fontWeight:'bold', margin:'0 10px' }
                }
                onClick={handleMenu}
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