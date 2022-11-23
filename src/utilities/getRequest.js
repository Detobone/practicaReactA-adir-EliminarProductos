export const getProduct = async (setState, url) => {
  const getProductsList = await fetch(url);
  const json = await getProductsList.json();
  const { products } = json;
  //   console.log("PRODUCTOS", products);
  setState(products);
};
