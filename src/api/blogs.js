// Add a room
export const addBlog = async (blogData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const data = await response.json();
  return data;
};

// Get all blogs
export const getAllBlogs = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);

  const data = await response.json();
  return data;
};
