import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PostBlog = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="px-4 md:px-32 bg-slate-200/40 py-10 ">
      <div className="bg-white md:py-8 py-5 md:px-16 px-8 rounded-lg shadow-lg ring-2 ring-slate-400/50">
        <div className="flex gap-4">
          <img
            className="h-12 w-12 rounded-full border-2"
            src={user?.photoURL}
            alt=""
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder={`What's on your mind, ${user?.userName} ?`}
            className="w-full px-3 py-2 border rounded-full border-gray-300 focus:outline-gray-400 bg-gray-200 text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
