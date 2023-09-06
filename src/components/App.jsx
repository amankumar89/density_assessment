import React from "react";
import styled from "styled-components";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
