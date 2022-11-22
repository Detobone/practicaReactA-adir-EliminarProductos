import { useEffect, useMemo, useState } from "react";

export const ProductCards = ({ setProductos, productos }) => {
  const url = "http://localhost:5173/api/products";

  const getProduct = async () => {
    const getProductosList = await fetch(url);
    const json = await getProductosList.json();
    const { products } = json;

    console.log("PRODUCTOS", products);
    setProductos(products);
  };
  // useEffect(() => {
  //   getProduct();
  //   return setProductos(productos);
  // }, []);

  console.log(productos);
  return (
    <div className="cardContainer">
      {productos &&
        productos.map(
          ({ id, title, description, price, stock, category, image }) => (
            <div className="productCard" key={id}>
              <button>X</button>
              <h2>{title}</h2>
              <p>{description}</p>
              <span>Price:&nbsp;${price}</span>
              <span>Stock:&nbsp;{stock}</span>
              <div>Category:&nbsp;{category}</div>
              <img src={image} alt={title} />
            </div>
          )
        )}
    </div>
  );
};
