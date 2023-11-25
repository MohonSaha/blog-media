import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    // image upload
    // Create a data packet for imgbb:
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    // Send the packet data to imgbb:
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        // Send data in the firebase
        createUser(data.email, data.password).then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          // Update profile in firebase

          updateUserProfile(data.name, imageUrl)
            .then(() => {
              Swal.fire({
                title: "Good job!",
                text: "User created successfully!",
                icon: "success",
              });
              // ========== save user to db
              saveUser(result.user);
              navigate(from, { replace: true });
            })
            .catch((err) => {
              console.log(err.message);
              setLoading(false);
            });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handel google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const gLoggedUser = result.user;
        console.log(gLoggedUser);
        // ============ saved user in db
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-24">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to AirCNC</p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                {...register("image")}
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.emai && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 text-sm">
                  Password must be 6 charecters
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-orange-500 w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-orange-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
