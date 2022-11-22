export const postResquest = async (body) => {
  const url = "http://localhost:5173/api/products/";
  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
  };

  const apiRequest = await fetch(url, settings);
  const response = (await apiRequest.json()) ?? alert("Petición invalida");

  console.log(response);
};
