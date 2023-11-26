// Add a comment
export const addComment = async (commentData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  const data = await response.json();
  return data;
};

// Get commets for specific post through post id
export const getComments = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/comments/${id}`
  );

  const data = await response.json();
  return data;
};
