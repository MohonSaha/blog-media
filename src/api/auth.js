// funcion to save user in mongodb

export const saveUser = (user) => {
  const currentUser = {
    email: user?.email,
    photo: user?.photoURL,
    name: user?.displayName,
  };

  // fetch method
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// gat current user
export const getUser = async (user) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${user.email}`
  );

  const data = await response.json();
  return data;
};
