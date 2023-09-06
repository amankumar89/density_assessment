import React from 'react'
import styled from 'styled-components';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Header />
      <Main />
      {/* <Footer /> */}
    </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div``;