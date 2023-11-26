import { TbFidgetSpinner } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Modal = ({ openModal, closeModal, handleSubmit, userData, loading }) => {
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-scroll">
        <form onSubmit={handleSubmit}>
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
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Update Data
                    </h3>

                    {/* start post form */}
                    <div className="mt-4 space-y-4">
                      <input
                        type="text"
                        name="Uname"
                        id="name"
                        placeholder="Enter Your Name Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                      <input
                        type="number"
                        name="mobile"
                        id="name"
                        placeholder="Enter Your Number Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                      <input
                        type="text"
                        name="versity"
                        id="name"
                        placeholder="Enter Your versity Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                      <input
                        type="text"
                        name="address"
                        id="name"
                        placeholder="Enter Your address Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
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
                    "Update"
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
    </div>
  );
};

export default Modal;
