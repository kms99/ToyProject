import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

function App() {
  return (
    <StWrapper>
      <Header />
      <Main />
      <Footer />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  position: relative;
  background: #242b41;
  color: #e3eded;
  width: 80%;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 5rem;
  margin: 0 auto;
`;

export default App;
