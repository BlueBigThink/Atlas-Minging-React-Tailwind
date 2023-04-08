import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from '../Pages/Home';

const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  }
];

const AppRoutes = () => {
  const Routes = useRoutes(mainRoutes)
  return Routes
}

export default AppRoutes