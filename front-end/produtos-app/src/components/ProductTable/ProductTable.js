import React, { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../api/ProductService";
import ProductTableView from "./ProductTableView";

// Componente principal que utiliza a lógica e visualização separadas
const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Carrega os produtos quando o componente é montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products.");
      }
    };
    fetchProducts();
  }, []);

  // Função para adicionar um novo produto
  const handleAddProduct = async (productData) => {
    try {
      await addProduct(productData);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      setError("Failed to add product.");
    }
  };

  // Função para atualizar um produto existente
  const handleUpdateProduct = async (id, productData) => {
    try {
      await updateProduct(id, productData);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      setError("Failed to update product.");
    }
  };

  // Função para excluir um produto
  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      setError("Failed to delete product.");
    }
  };

  return (
    <ProductTableView
      products={products}
      onAddProduct={handleAddProduct}
      onUpdateProduct={handleUpdateProduct}
      onDeleteProduct={handleDeleteProduct}
      error={error}
    />
  );
};

export default ProductTable;
