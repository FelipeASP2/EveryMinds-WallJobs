import React, { useState } from "react";
import { addProduct } from "../../api/ProductService";
import AddProductView from "./AddProductView";

// Componente principal para adicionar um produto
const AddProduct = ({ history }) => {
  const [product, setProduct] = useState({
    name: "",
    code: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState(null);

  // Função para adicionar um novo produto
  const handleAddProduct = async () => {
    try {
      await addProduct(product);
      history.push("/products"); // Redireciona para a lista de produtos após a adição
    } catch (error) {
      setError("Failed to add product.");
    }
  };

  // Atualiza o estado do produto conforme os inputs são alterados
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <AddProductView
      product={product}
      onInputChange={handleInputChange}
      onAddProduct={handleAddProduct}
      error={error}
    />
  );
};

export default AddProduct;
