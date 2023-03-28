import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from '../Pages/Home';
const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nft',
    element: <div>NFT</div>,
    children: [
      {
        index: true,
        element: <div>NFT</div>,
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