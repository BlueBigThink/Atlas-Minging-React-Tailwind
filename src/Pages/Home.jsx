import React from 'react';
import TopBar from '../Components/TopBar';

import LogoHero from '../Assets/atlas-logo-hero.png';

function Home() {
  return (
    <>
      <TopBar selected={0}/>
      <div className="bg-hero-1 min-h-screen flex flex-col overflow-y-auto">
        <div className="bg-ellipse overflow-x-hidden mx-auto w-full flex-1">
          <div className='overflow-x-hidden mx-auto w-full flex-1'>
            <div className="flex flex-col items-center">
              <img alt="" className="w-[80%] lg:w-fit" src={LogoHero}/>
              <p className="py-2 -translate-y-8 lg:-translate-y-16 font-bold text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-[#8ECCFB] to-white">
                Pushing one step further
              </p>
              <div className="bg-hero-2 w-full flex flex-col items-center py-8 lg:py-16 px-4 gap-4">
                <div className="w-full flex flex-col items-center py-8 lg:py-16 px-4 gap-4">
                  <p className="text-white text-sm lg:text-base max-w-5xl text-center">
                    Welcome to our innovative blockchain project that aims to revolutionize multi-level network marketing through the use of cutting-edge technologies such as non-fungible tokens (NFTs) and cryptocurrencies. We believe that traditional multi-level marketing can be revolutionized by introducing transparency, fairness, and accessibility to everyone, and that's exactly what we're doing with our project.
                  </p>
                  <p className="text-white text-sm lg:text-base max-w-5xl text-center">
                    Our platform utilizes blockchain technology to create a decentralized network that enables individuals to build their own businesses and earn rewards through a multi-level referral system. By leveraging the power of NFTs, we are able to offer unique digital assets to our users, which can be used to incentivize and reward participants within the network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;