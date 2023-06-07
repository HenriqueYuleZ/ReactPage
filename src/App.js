import React from 'react'

import { Footer, Blog, Possibility, Features, WhatUnity, Header } from './containers';
import { NavBar, Brand, CTA } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatUnity />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App