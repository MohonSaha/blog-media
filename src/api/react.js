// Add a react
export const addReact = async (reactData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/reacts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reactData),
  });

  const data = await response.json();
  return data;
};

// Get react for specific post through post id
export const getReacts = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/reacts/${id}`);

  const data = await response.json();
  return data;
};
