import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaComment, FaShareAltSquare, FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-4 md:px-32 bg-slate-200/40 py-32">
      <div className="flex flex-col gap-6 bg-white shadow-xl  p-3 rounded-xl ring-2 ring-slate-200">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold">
            Making wearable medical devices more patient-friendly with Professor
            Esther Rodriguez-Villegas from Acurable
          </h1>
        </div>
        <div className="w-full md:h-[80vh] overflow-hidden rounded-xl">
          <img
            src="https://i.ibb.co/y6djLdZ/dumbbells-2465478-1280.jpg"
            alt=""
            className=" w-full h-[100%] object-center"
          />
        </div>

        <div className="mx-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full border-2 border-orange-400"
              src={user?.photoURL}
              alt=""
            />
            <div className="ml-2">
              <p className="font-bold  text-2xl">Mohon Saha</p>
              <p className="text-sm font-semibold text-slate-600">
                October 6, 2023
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 font-semibold text-slate-600">
              <MdEditSquare size={24} />
              <FaTrash size={20} />
            </div>
          </div>
        </div>

        <div className="mx-3">
          <p>
            Welcome back to Found, where we get the stories behind the startups.
            This week, our old friend Darrell Etherington joins Becca Szkutak to
            talk with Professor Esther Rodriguez-Villegas from Acurable. Welcome
            back to Found, where we get the stories behind the startups. This
            week, our old friend Darrell Etherington joins Becca Szkutak to talk
            with Professor Esther Rodriguez-Villegas from Acurable...
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center -mt-3 md:mx-8 mx-4">
          <div className="flex items-center cursor-pointer">
            <AiFillHeart
              size={24}
              className="fill-slate-500/90 outline-2 hover:fill-orange-600"
            />
            <p className="ml-2 font-semibold text-slate-600">5</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <FaComment size={20} className="fill-slate-500/90" />
            <p className="ml-2 font-semibold text-slate-600">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <FaShareAltSquare size={20} className="fill-slate-500/90" />
            <p className="ml-2 font-semibold text-slate-600">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
