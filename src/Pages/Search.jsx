import React from 'react';
import TopBar from '../Components/TopBar';

import LogoHero from '../Assets/atlas-logo-hero.png';

function Search() {
  return (
    <>
      <TopBar selected={3}/>
      <div className="bg-hero-1 min-h-screen flex flex-col overflow-y-auto">
        <div className="bg-ellipse overflow-x-hidden mx-auto w-full flex-1">
          <div className='overflow-x-hidden mx-auto w-full flex-1'>
            <div className="flex flex-col items-center">
              <img alt="" className="w-[80%] lg:w-fit" src={LogoHero}/>
              <div className="cut-tl-edge p-[3px] bg-blue-700 w-full max-w-sx relative">
                <div className='cut-tl-edge px-4 py-3 gradient-black-blue w-full stan-font text-center text-1'>
                  <div className='flex flex-row gap-2'>
                    <input className="flex-1 w-full text-white px-3 bg-transparent focus:outline-none text-center" value="1"/>
                    <button className="shrink-0 cut-tl-br-button px-2 py-1 bg-gradient-to-b from-blue-900 to-blue-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                        </path>
                      </svg>
                    </button>
                  </div>
                  <div className='absolute gradient-blue-teal w-16 h-14 cut-tl-edge-design bottom-0 left-0'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;