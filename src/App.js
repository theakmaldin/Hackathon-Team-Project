import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import BasketContextProvider from "./context/BasketProductProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BasketContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
        </ProductContextProvider>
      </BasketContextProvider>
    </>
  );
}

export default App;
