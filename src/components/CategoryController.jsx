import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { categories } from "../../public/category";

const CategoryController = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-transparent">
      <div className="flex items-center bg-transparent">
        {/* Controller */}
        <div className="">
          <div className="bg-slate-800 w-10 h-10 rounded-full felx items-center justify-center shadow-2xl shadow-white ring-2 ring-slate-800/60 z-10 relative">
            {open ? (
              <>
                <FaMinusCircle
                  onClick={() => setOpen(!open)}
                  className="text-white   mx-auto w-full my-auto h-full"
                  size={24}
                ></FaMinusCircle>
              </>
            ) : (
              <>
                <FaPlusCircle
                  onClick={() => setOpen(!open)}
                  className="text-white   mx-auto w-full my-auto h-full"
                  size={24}
                ></FaPlusCircle>
              </>
            )}
          </div>
        </div>

        {/* bar */}
        {
          <>
            <div
              className={`flex gap-5 items-center overflow-x-auto transform transition-all duration-500 ease-in-out relative right-10 bg-white py-[7px] px-6 rounded-l-2xl rounded-r-xl pl-10 shadow-lg ring-1 ring-slate-800/60 ${
                open ? "opacity-100 translate-x-5" : "opacity-0 translate-x-0"
              }`}
            >
              {categories.map((item, index) => (
                <div key={index}>
                  <pre className="font-semibold text-slate-600 md:cursor-pointer cursor-default">
                    {item.label}
                  </pre>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default CategoryController;
