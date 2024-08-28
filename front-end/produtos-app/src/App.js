import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./components/ProductTable/ProductTable";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="Title">
        <h1>Management Produtos Nunes Sports</h1>
      </div>
      <Routes>
        <Route path="/products" element={<ProductTable />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/" element={<ProductTable />} />
      </Routes>
    </Router>
  );
};

export default App;
