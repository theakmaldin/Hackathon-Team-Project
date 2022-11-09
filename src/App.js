import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContexProvider";
import BasketContextProvider from "./context/BasketProductProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <AuthContextProvider>
      {/* <Navbar /> */}
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </AuthContextProvider>
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
