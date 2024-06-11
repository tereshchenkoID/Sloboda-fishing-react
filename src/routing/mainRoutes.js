import React, {lazy} from 'react'

const Main = lazy( () => import("Pages/Main"));
const News = lazy( () => import("Pages/News"));
const Donate = lazy( () => import("Pages/Donate"));
const Gallery = lazy( () => import("Pages/Gallery"));
const Sectors = lazy( () => import("Pages/Sectors"));
const Trophies = lazy( () => import("Pages/Trophies"));
const Contact = lazy( () => import("Pages/Contact"));

export const routes = [
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/news',
    element: <News/>
  },
  {
    path: '/donate',
    element: <Donate/>
  },
  {
    path: '/gallery',
    element: <Gallery/>
  },
  {
    path: '/sectors',
    element: <Sectors/>
  },
  {
    path: '/trophies',
    element: <Trophies/>
  },
  {
    path: '/contacts',
    element: <Contact/>
  }
]
