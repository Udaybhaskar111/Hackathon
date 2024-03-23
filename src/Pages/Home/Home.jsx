/**
@author:Charan
**/
import React from 'react';
import Header from '../../Components/Common/Header/Header';
import Welcome from '../../Components/Welcome/Welcome';
import TabSwitch from '../../Components/Common/TabSwitch/TabSwitch';

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <TabSwitch />
    </>
  );
}

export default Home;
