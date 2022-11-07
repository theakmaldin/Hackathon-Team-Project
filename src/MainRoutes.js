import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import HomePage from "./Components/HomePage/HomePage";
import ProductsList from "./Components/Product/ProductList/ProductList";
// import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/details/:id" element={<ProductDetails />} /> */}
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
