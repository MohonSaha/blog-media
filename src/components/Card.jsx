/* eslint-disable react/prop-types */

import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaShareAltSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({ blog }) => {
  const { uploadTime, totalReact, image, content, host } = blog;

  // eslint-disable-next-line react/prop-types
  const shortContent = content.substring(0, 200);

  return (
    <div className="col-span-1 cursor-pointer group bg-white rounded-xl p-2 shadow-lg ring-2 ring-slate-300/20">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={image}
            alt="blog"
          />
        </div>
        {/* author */}
        <div className="px-2  flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src={host?.image} alt="" />
            <div className="ml-2">
              <p className="font-bold  text-2xl">{host?.name}</p>
              <p className="text-sm font-semibold text-slate-600">
                {uploadTime}
              </p>
            </div>
          </div>
          {/* <div>
            <div className="flex gap-2 font-semibold text-slate-600">
              <MdEditSquare size={24} />
              <FaTrash size={20} />
            </div>
          </div> */}
        </div>
        {/* content */}
        <div className="px-2 font-semibol text-sm">
          {shortContent}...{" "}
          <Link
            to={`/blogs/details/:id`}
            className="text-base font-semibold text-slate-600"
          >
            See more
          </Link>
        </div>
        {/* reaction  */}
        <hr />
        <div className="flex justify-between items-center  md:mx- mx-2">
          <div className="flex items-center cursor-pointer">
            <AiFillHeart
              size={24}
              className="fill-slate-500/90 outline-2 hover:fill-orange-600"
            />
            <p className="ml-2 font-semibold text-slate-600">5</p>
          </div>
          <div
            // onClick={() => setOpen(!open)}
            className="flex items-center cursor-pointer"
          >
            <FaComment size={20} className="fill-slate-500/90" />
            <Link
              to={`/blogs/details/:id`}
              className="ml-2 font-semibold text-slate-600"
            >
              Comment
            </Link>
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

export default Card;
