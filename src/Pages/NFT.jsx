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
    img: Coin100,
  },
  {
    name: 'SILVER',
    img: Coin200,
  },
  {
    name: 'PEARL',
    img: Coin500,
  },
  {
    name: 'RUBY',
    img: Coin1000,
  },
  {
    name: 'GOLD',
    img: Coin3000,
  },
  {
    name: 'DIAMOND',
    img: Coin5000,
  },
];
function NFT() {
  return (
    <>
      <TopBar selected={1}/>
      <Box sx={{color:'white'}}>
        <Container fixed sx={{padding : "20px 0"}}>
          <Grid container spacing={3}>
              {
                nftlist.map((nft, index) => {
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={4}>
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
