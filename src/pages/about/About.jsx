import { useContext, useEffect, useState } from "react";
import { getUser } from "../../api/auth";
import { AuthContext } from "../../providers/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser(user)
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="px-4 md:px-32 py-40 bg-slate-200/40">
      <div className="flex md:flex-row flex-col justify-between">
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
          <div>
            <p>Number</p>
            <p>Versity</p>
            <p>Address</p>
          </div>
        </div>

        {/* right side  */}
        <div className="md:w-3/5 md:ml-20 space-y-10">
          <div className="">
            <div className="flex gap-10">
              <button className="bg-green-500 hover:bg-green-600 text-white  px-6 py-2 rounded-xl">
                My Blogs
              </button>
              <button className="bg-orange-400 text-white  px-6 py-2 rounded-xl hover:bg-orange-600">
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
                cupiditate cumque mollitia debitis dolorum aspernatur, doloribus
                doloremque commodi nobis, in minus alias. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Veritatis nisi eius ratione
                eligendi iure odit, sint earum cupiditate cumque mollitia
                debitis dolorum aspernatur, doloribus doloremque commodi nobis,
                in minus alias.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
