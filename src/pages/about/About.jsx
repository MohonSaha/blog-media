import { useContext, useEffect, useState } from "react";
import { getUser, updateUser } from "../../api/auth";
import { AuthContext } from "../../providers/AuthProvider";
import Modal from "../../components/modal/Modal";
import { setLogLevel } from "firebase/app";

const About = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.Uname.value;
    const number = form.mobile.value;
    const versity = form.versity.value;
    const address = form.address.value;
    const email = user?.email;
    const updateUserData = {
      name,
      number,
      versity,
      address,
      email,
    };
    console.log(updateUserData);
    updateUser(updateUserData);
    setLoading(false);
  };

  useEffect(() => {
    getUser(user)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <div className="px-4 md:px-32 py-40 bg-slate-200/40">
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* left side  */}
          <div className="border-r-4 px-6 md:w-2/5 space-y-6">
            {/* user image  */}
            <div className="flex md:flex-row flex-col ">
              <div className="flex items-center">
                <img
                  className="h-24 w-24 rounded-full border-2 borde-orange-400"
                  src={userData?.photo}
                  alt=""
                />
                <div className="ml-2">
                  <p className="font-bold  text-3xl">{userData?.name}</p>
                  <p className="text-sm font-semibold text-slate-600">
                    {userData?.email}
                  </p>
                </div>
              </div>
            </div>
            {/* user address */}
            <div className=" space-y-2">
              <div>
                <p className="text-sm font-semibold text-slate-600">Number:</p>
                <p className="text-xl font-semibold">{userData?.number}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Versity</p>
                <p className="text-xl font-semibold">{userData?.versity}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Address</p>
                <p className="text-xl font-semibold">{userData?.address}</p>
              </div>
            </div>
          </div>

          {/* right side  */}
          <div className="md:w-3/5 md:ml-20 space-y-10">
            <div className="">
              <div className="flex gap-10">
                <button className="bg-green-500 hover:bg-green-600 text-white  px-6 py-2 rounded-xl">
                  My Blogs
                </button>
                <button
                  onClick={openModal}
                  className="bg-orange-400 text-white  px-6 py-2 rounded-xl hover:bg-orange-600"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="text-left text-lg">
              <p>
                <span className="font-semibold">About Me: </span>
                <span className="text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis nisi eius ratione eligendi iure odit, sint earum
                  cupiditate cumque mollitia debitis dolorum aspernatur,
                  doloribus doloremque commodi nobis, in minus alias. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
                  nisi eius ratione eligendi iure odit, sint earum cupiditate
                  cumque mollitia debitis dolorum aspernatur, doloribus
                  doloremque commodi nobis, in minus alias.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          handleSubmit={handleSubmit}
          openModal={openModal}
          closeModal={closeModal}
          userData={userData}
          loading={loading}
        ></Modal>
      )}
    </>
  );
};

export default About;
