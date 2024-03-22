/*
    @Author : Lalitha
*/

import React from 'react';
import Header from '../../Components/Common/Header/Header';
import { AllCards } from '../../Components/AllCards/AllCards';
import Welcome from '../../Components/Welcome/Welcome';
// import AllCards  from '../../Components/AllCards/AllCards.jsx';
// import {Header} from '../../Components/AllCards/AllCards.jsx'
// import {Welcome} from '../../Components/Welcome/Welcome.jsx'
function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <AllCards />
    </>
  );
}

export default Home;
