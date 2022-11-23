export const deletionRequest = async (id) => {
  const url = `http://localhost:5173/api/products/${id}`;
  const settings = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const apiRequest = await fetch(url, settings);
  const response = await apiRequest.json();

  // console.log(response);
};
