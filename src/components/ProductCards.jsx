import { deletionRequest } from "../utilities/deletionRequest";
import { getProduct } from "../utilities/getRequest";

export const ProductCards = ({ setProductos, productos }) => {
  const url = "http://localhost:5173/api/products";
  const onRemoveProduct = (idProducto) => {
    deletionRequest(idProducto);
    getProduct(setProductos, url);
  };
  return (
    <div className="cardContainer">
      {productos &&
        productos.map(
          ({ id, title, description, price, stock, category, image }) => (
            <div className="productCard" key={id}>
              <button onClick={() => onRemoveProduct(id)}>X</button>
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
