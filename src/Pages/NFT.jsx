import React from 'react';
import TopBar from '../Components/TopBar';
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
      <div className="nft-bg flex-1 w-full mx-auto">
        <div className="flex flex-col items-center py-8">
          <div className="flex flex-col items-end gap-4">
            <div className="flex flex-col items-end w-full max-w-xs">
              <p className="text-white font-bold tracking-widest text-sm">
                REFERRER
              </p>
              <div className="cut-tl-br p-[3px] bg-blue-700 w-full relative transition-all ease-in-out duration-500">
                <div className="cut-tl-br px-2 py-2 gradient-black-blue w-full transition-all ease-in-out duration-500">
                  <div className="absolute gradient-blue-teal w-28 h-16 cut-tl-edge-design bottom-0 left-0 transition-all ease-in-out duration-500"></div>
                  <div className="absolute gradient-blue-teal w-28 h-16 cut-tl-edge-design top-0 rotate-180 right-0 transition-all ease-in-out duration-500"></div>
                  <p className="text-center text-white font-bold">
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
              nftlist.map((nft, index) => {
                return(
                    <NftItem key={index} item={nft}/>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NFT;
