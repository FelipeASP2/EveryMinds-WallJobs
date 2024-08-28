import React, { useState, useEffect } from "react";

const EditProductView = ({ product, onUpdateProduct, error }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    code: product?.code || "",
    description: product?.description || "",
    price: product?.price || "",
  });

  // Use useEffect to update formData when product prop changes
  useEffect(() => {
    setFormData({
      name: product?.name || "",
      code: product?.code || "",
      description: product?.description || "",
      price: product?.price || "",
    });
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(formData);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
          placeholder="Code"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <button type="submit">Atualizar Produtos</button>
      </form>
    </div>
  );
};

export default EditProductView;
