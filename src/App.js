import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
}

export default App;
