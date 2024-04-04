import React from 'react';

import { 
  AboutUs, 
  Chef, 
  FindUs, 
  Footer, 
  Gallery, 
  Header, 
  Intro, 
  Laurels, 
  SpecialMenu 
} from './container';
import { Navbar, ReturnToTop } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <ReturnToTop />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
