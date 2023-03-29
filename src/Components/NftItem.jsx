import React from "react";
import TrBorder from '../Assets/tr-border.png';
import BlBorder from '../Assets/bl-border.png';
import Info from '../Assets/info.png';

const NftItem = (props) => {
  const {item} = props;
  return (
    <>
      <div className="group w-[20rem] flex flex-col">
        <div className="z-[1] bg-[#0026F4] bg-gradient-to-t from-[#0B50A0] to-[#000533]/0 group-hover:from-[#00E0FF] group-hover:to-[#00E0FF] cut-edge p-[2px] w-full relative">
          <div className="bg-[#000533] bg-gradient-to-t from-[#0062F4]/50 via-[#0062F4]/30 to-[#000000]/0 py-8 px-8 cut-edge w-full flex flex-col items-center relative">
            <img class="z-[1] right-0 top-0 absolute" alt="" src={TrBorder}/>
            <img class="z-[2] right-2 top-2 absolute" alt="" src={Info}/>
            <img class="z-[1] left-0 bottom-0 absolute" alt="" src={BlBorder}/>
            {/* <div className="bg-coin-100 bg-cover h-40 w-40 group-hover:hidden"></div> */}
            <div className="bg-coin-100 bg-cover h-40 w-40"></div>
          </div>
        </div>
        <div className="flex-1 flex -translate-y-10 bg-gradient-to-b from-[#000533] to-[#0B50A0] p-[2px] group-hover:from-[#00E0FF] group-hover:to-[#00E0FF] w-full">
        <div className="flex-1 bg-gradient-to-b to-[#000533] from-[#070F56] py-10 w-full flex flex-col items-center gap-6">
          <p className="uppercase py-6 font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-t from-[#A5F4FF] to-[#3250F0]">
            gold
          </p>
          <div className="cursor-pointer cut-edge-button w-48 p-[2px] drop-shadow-2xl bg-[#0026F4] bg-gradient-to-t from-[#000000]/80 via-[#000000]/50 to-[#0026F4] group-hover:from-[#00E0FF] group-hover:via-[#00E0FF] group-hover:to-[#00E0FF]">
            <button disabled="" className="cut-edge-button w-full py-2 bg-gradient-to-b from-[#0026F4]/0 via-[#089DB1]/50 to-[#089DB1] disabled:from-gray-900 disabled:via-gray-700 disabled:to-gray-500">
              <p className="text-white font-bold text-3xl text-center">
                BUY
              </p>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NftItem;