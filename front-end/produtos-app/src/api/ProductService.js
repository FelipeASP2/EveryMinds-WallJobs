import axios from "axios";

// URL base da API
const API_URL = ""; //Ajuste conforme a rota real

// Função para obter todos os produtos
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Função para obter um produto por ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Função para adicionar um novo produto
export const addProduct = async (productData) => {
  try {
    await axios.post(`${API_URL}/adicionar_produto`, productData);
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Função para atualizar um produto existente
export const updateProduct = async (id, productData) => {
  try {
    await axios.put(`${API_URL}/atualizar_produto/${id}`, productData);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Função para excluir um produto
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/deletar_produto/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
