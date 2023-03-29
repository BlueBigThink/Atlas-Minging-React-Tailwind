import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from '../Pages/Home';
import NFT from '../Pages/NFT';

const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nft',
    element: <NFT />,
    children: [
      {
        index: true,
        element: <NFT />,
      },
      {
        path: '/nft/detail/:id',
        element: <div>NFT Detail</div>,
      },
    ],
  },
];

const AppRoutes = () => {
  const Routes = useRoutes(mainRoutes)
  return Routes
}

export default AppRoutes