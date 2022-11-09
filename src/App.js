import React from "react";
import Footer from "./Components/Footer/Footer";
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
          <Footer />
        </ProductContextProvider>
      </BasketContextProvider>
    </>
  );
}

export default App;
