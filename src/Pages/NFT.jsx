import React from 'react';
import TopBar from '../Components/TopBar';
import { 
  Box,
  Container,
  Grid
} from '@mui/material';
import NftItem from '../Components/NftItem';

import Coin100 from '../Assets/100.png';
import Coin200 from '../Assets/200.png';
import Coin500 from '../Assets/500.png';
import Coin1000 from '../Assets/1000.png';
import Coin3000 from '../Assets/3000.png';
import Coin5000 from '../Assets/5000.png';

const nftlist = [
  {
    name: 'BRONZE',
    coin : 100,
    img: Coin100,
    disabled : true,
  },
  {
    name: 'SILVER',
    coin : 200,
    img: Coin200,
    disabled : true,
  },
  {
    name: 'PEARL',
    coin : 500,
    img: Coin500,
    disabled : false,
  },
  {
    name: 'RUBY',
    coin : 1000,
    img: Coin1000,
    disabled : false,
  },
  {
    name: 'GOLD',
    coin : 3000,
    img: Coin3000,
    disabled : false,
  },
  {
    name: 'DIAMOND',
    coin : 5000,
    img: Coin5000,
    disabled : false,
  },
];
function NFT() {
  return (
    <>
      <TopBar selected={1}/>
      <Box sx={{color:'white'}}>
        <Container fixed sx={{padding : "20px 0"}}>
          <Grid container spacing={3} sx={{margin : 0, padding : 0}}>
              {
                nftlist.map((nft, index) => {
                  return(
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <NftItem item={nft}/>
                    </Grid>
                  )
                })
              }
          </Grid>
        </Container>
      </Box>
    </>
  )
}
export default NFT;
