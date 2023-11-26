import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../api/imgUpload";
import { addBlog } from "../../../api/blogs";
import Swal from "sweetalert2";

const PostBlog = () => {
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Upload Image");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePostSubmit = (event) => {
    // Handle submit post
    event.preventDefault();
    setLoading(true);
    const target = event.target;
    const image = target.image.files[0];
    const content = target.content.value;

    // upload image
    imageUpload(image)
      .then((data) => {
        const contentData = {
          image: data.data.display_url,
          content,
          uploadTime: new Date(),
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };

        // post blog data in the server
        addBlog(contentData)
          .then((data) => {
            data;
          })
          .catch((err) => console.log(err));

        // console.log(contentData);
        // Simulate a delay for demonstration purposes
        setTimeout(() => {
          setLoading(false);
          closeModal(); // Close the modal after successful submission
        }, 200);
        Swal.fire({
          title: "Good job!",
          text: "Posted Successfully",
          icon: "success",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setButtonText(image.name);
  };

  return (
    <>
      <div className="px-4 md:px-32 bg-slate-200/40 py-10 ">
        <div className="bg-white md:py-8 py-5 md:px-16 px-8 rounded-lg shadow-lg ring-2 ring-slate-400/50">
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full border-2"
              src={user?.photoURL}
              alt=""
            />
            <input
              type="search"
              readOnly
              onClick={openModal}
              placeholder={`What's on your mind ${user?.displayName} ?`}
              className="text-left w-full px-3 py-2 border rounded-full border-gray-300 focus:outline-gray-400 bg-gray-200 text-gray-900 cursor-pointer"
              data-temp-mail-org="0"
            />
          </div>
        </div>
      </div>

      {/* Modal area is here */}
      <>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-scroll">
            <form onSubmit={handlePostSubmit}>
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                •
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-600 sm:mx-0 sm:h-10 sm:w-10">
                        <img
                          className="h-10 w-12 rounded-full border-2"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>

                      <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          {user?.displayName}
                        </h3>
                        <div className="mt-">
                          <p className="text-sm text-gray-500">26-11-2023</p>
                        </div>

                        {/* start post form */}
                        <div className="mt-4 space-y-4">
                          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                              <div className="flex flex-col w-max mx-auto text-center">
                                <label>
                                  <input
                                    onChange={(event) => {
                                      handleImageChange(event.target.files[0]);
                                    }}
                                    className="text-sm cursor-pointer w-36 hidden"
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept="image/*"
                                    hidden
                                  />
                                  <div className="bg-green-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-500">
                                    {/* Upload Image */}
                                    {buttonText}
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <textarea
                            className="resize-none border rounded-md w-full py-2 px-3 md:h-32 h-16"
                            required
                            name="content"
                            placeholder="Enter some content..."
                            //   value={content}
                            //   onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      //   onClick={closeModal}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {loading ? (
                        <TbFidgetSpinner
                          size={24}
                          className="mx-auto animate-spin"
                        />
                      ) : (
                        "Post"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    </>
  );
};

export default PostBlog;
