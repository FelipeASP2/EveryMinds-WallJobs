import React from "react";

const AddProductView = ({ product, onInputChange, onAddProduct, error }) => {
  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Adicionar Novo Produto</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddProduct();
        }}
      >
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={onInputChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="code"
          value={product.code}
          onChange={onInputChange}
          placeholder="Code"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={onInputChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={onInputChange}
          placeholder="Price"
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProductView;
