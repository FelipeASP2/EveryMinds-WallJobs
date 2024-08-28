import React, { useState } from "react";
import "./ProductTable.css";

const ProductTableView = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  error,
}) => {
  const [newProduct, setNewProduct] = useState({
    nome: "",
    codigo: "",
    descricao: "",
    preco: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddClick = () => {
    if (
      !newProduct.nome ||
      !newProduct.codigo ||
      !newProduct.descricao ||
      !newProduct.preco
    ) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    onAddProduct(newProduct);
    setNewProduct({ nome: "", codigo: "", descricao: "", preco: "" });
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleUpdateClick = (id) => {
    if (
      !editingProduct.nome ||
      !editingProduct.codigo ||
      !editingProduct.descricao ||
      !editingProduct.preco
    ) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    if (editingProduct) {
      onUpdateProduct(id, editingProduct);
      setEditingProduct(null);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Preço (R$)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.nome}</td>
                <td>{product.codigo}</td>
                <td>{product.descricao}</td>
                <td>{product.preco}</td>
                <td>
                  <button
                    className="editar"
                    onClick={() => handleEditClick(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="deletar"
                    onClick={() => onDeleteProduct(product.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="table-container">
        <h3>Adicionar Novo Produto</h3>
        <input
          className="input"
          type="text"
          name="nome"
          value={newProduct.nome}
          onChange={handleInputChange}
          placeholder="Nome"
        />
        <input
          className="input"
          type="number"
          name="codigo"
          value={newProduct.codigo}
          onChange={handleInputChange}
          placeholder="Código"
        />
        <input
          className="input"
          type="text"
          name="descricao"
          value={newProduct.descricao}
          onChange={handleInputChange}
          placeholder="Descrição"
        />
        <input
          className="input"
          type="number"
          name="preco"
          value={newProduct.preco}
          onChange={handleInputChange}
          placeholder="Preço"
        />
        <button className="post" onClick={handleAddClick}>
          Adicionar
        </button>
      </div>
      {editingProduct && (
        <div class="table-container">
          <h3>Editar Produto</h3>
          <input
            className="input"
            type="text"
            name="nome"
            value={editingProduct.nome}
            onChange={handleEditChange}
            placeholder="Nome"
          />
          <input
            className="input"
            type="number"
            name="codigo"
            value={editingProduct.codigo}
            onChange={handleEditChange}
            placeholder="Código"
          />
          <input
            className="input"
            type="text"
            name="descricao"
            value={editingProduct.descricao}
            onChange={handleEditChange}
            placeholder="Descrição"
          />
          <input
            className="input"
            type="number"
            name="preco"
            value={editingProduct.preco}
            onChange={handleEditChange}
            placeholder="Preço"
          />
          <button
            className="post"
            onClick={() => handleUpdateClick(editingProduct.id)}
          >
            Atualizar
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductTableView;
