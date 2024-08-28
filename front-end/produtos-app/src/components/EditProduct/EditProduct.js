import React, { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../../api/ProductService";
import EditProductView from "./EditProductView";

// Componente principal para editar um produto
const EditProduct = ({ match, history }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const productId = match.params.id; // ID do produto obtido da URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product.");
      }
    };
    fetchProduct();
  }, [productId]);

  // Função para atualizar um produto
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await updateProduct(productId, updatedProduct);
      history.push("/products"); // Redireciona para a lista de produtos após a atualização
    } catch (error) {
      setError("Failed to update product.");
    }
  };

  return (
    <EditProductView
      product={product}
      onUpdateProduct={handleUpdateProduct}
      error={error}
    />
  );
};

export default EditProduct;
