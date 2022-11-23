import React, { useEffect, useState } from "react";
import { postResquest } from "../utilities/postResquest";
import PropTypes from "prop-types";
import { getProduct } from "../utilities/getRequest";

export const FormProducto = ({ setProductos }, { productos }) => {
  const url = "http://localhost:5173/api/products";
  const [addNewProduct, setAddNewProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const { id, title, description, price, stock, category, image } =
    addNewProduct;

  const onChange = (e) => {
    const { value, name } = e.target;
    setAddNewProduct({ ...addNewProduct, [name]: value });
    // console.log("Evento", e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postResquest(addNewProduct);
    getProduct(setProductos, url);
  };

  useEffect(() => {
    getProduct(setProductos, url);
  }, [productos]);

  return (
    <form className="productForm" onSubmit={onSubmit}>
      <h2>Agrega tu producto</h2>
      <label htmlFor="productId">Image ID:</label>
      <input
        classID="productId"
        type="text"
        onChange={onChange}
        value={id}
        name="id"
      />
      <label htmlFor="productTitle">Title:</label>
      <input
        classID="productTitle"
        type="text"
        onChange={onChange}
        value={title}
        name="title"
      />
      <label htmlFor="productDescription">Description:</label>
      <input
        classID="productDescription"
        type="text"
        onChange={onChange}
        value={description}
        name="description"
      />
      <label htmlFor="productPrice">Price:</label>
      <input
        classID="productPrice"
        type="text"
        onChange={onChange}
        value={price}
        name="price"
      />
      <label htmlFor="productStock">Stock:</label>
      <input
        classID="productStock"
        type="text"
        onChange={onChange}
        value={stock}
        name="stock"
      />
      <label htmlFor="productCategory">Category:</label>
      <input
        classID="productCategory"
        type="text"
        onChange={onChange}
        value={category}
        name="category"
      />
      <label htmlFor="productImage">Image:</label>
      <input
        classID="productImage"
        type="text"
        onChange={onChange}
        value={image}
        name="image"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
