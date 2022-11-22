import { ProductCards } from "./components/ProductCards";
import { FormProducto } from "./components/FormProducto";
import "./App.css";
import { useMemo, useState } from "react";
function App() {
  // const [first, setfirst] = useState();
  const [productos, setProductos] = useState();
  const handlerFirst = (value) => {
    setfirst(value);
  };

  return (
    <>
      <h1>Hola APP</h1>
      <ProductCards setProductos={setProductos} productos={productos} />
      <FormProducto setProductos={setProductos} productos={productos} />
    </>
  );
}

export default App;
