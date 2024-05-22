import React from "react";
import BoxContainer from "./components/BoxContainer";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Clickable Boxes</h1>
        <BoxContainer />
      </div>
    </>
  );
}

export default App;
