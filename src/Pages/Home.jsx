import React from 'react';
import TopBar from '../Components/TopBar';
import { Box } from '@mui/material';

import LogoHero from '../Assets/atlas-logo-hero.png';
import HomeEllipse from '../Assets/hero-ellipse.png';
import HomeBG1 from '../Assets/hero-bg-1.png';
import HomeBG2 from '../Assets/hero-bg-2.png';

function Home() {
  return (
    <>
      <TopBar selected={0}/>
      <Box
        sx={{ 
          margin: 'auto',
          width: '1', 
          backgroundImage:`url(${HomeBG1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box
          sx={{ 
            margin: 'auto',
            width: '1', 
            backgroundImage:`url(${HomeEllipse})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className='overflow-x-hidden mx-auto w-full flex-1'>
            <div className="flex flex-col items-center">
              <img alt="" className="w-[80%] lg:w-fit" src={LogoHero}/>
              <p class="py-2 text-white -translate-y-8 lg:-translate-y-16 font-bold text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-[#8ECCFB] to-white">
                Pushing one step further
              </p>
              <Box
                sx={{ 
                  width: '1', 
                  backgroundImage:`url(${HomeBG2})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              >
                <div className="w-full flex flex-col items-center py-8 lg:py-16 px-4 gap-4">
                  <p className="text-white text-sm lg:text-base max-w-5xl text-center">
                    Welcome to our innovative blockchain project that aims to revolutionize multi-level network marketing through the use of cutting-edge technologies such as non-fungible tokens (NFTs) and cryptocurrencies. We believe that traditional multi-level marketing can be revolutionized by introducing transparency, fairness, and accessibility to everyone, and that's exactly what we're doing with our project.
                  </p>
                  <p className="text-white text-sm lg:text-base max-w-5xl text-center">
                    Our platform utilizes blockchain technology to create a decentralized network that enables individuals to build their own businesses and earn rewards through a multi-level referral system. By leveraging the power of NFTs, we are able to offer unique digital assets to our users, which can be used to incentivize and reward participants within the network.
                  </p>
                </div>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Home;