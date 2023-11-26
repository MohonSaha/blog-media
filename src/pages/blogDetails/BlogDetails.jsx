import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaComment, FaShareAltSquare, FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { addComment, getComments } from "../../api/comments";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const { uploadTime, totalReact, image, content, host, _id } = blogDetails;
  const blogTitle = content.substring(0, 130);
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commetns, setComments] = useState([]);
  const [realTimeComment, setRealTimeComment] = useState(false);

  useEffect(() => {
    // setLoading(true);
    getComments(_id)
      .then((data) => {
        setComments(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id, realTimeComment]);
  console.log(commetns);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target;
    const comment = target.comment.value;
    const commentData = {
      comment,
      uploadTime: new Date(),
      host: {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      },
      blogId: _id,
    };

    // post comment data in the server
    addComment(commentData)
      .then((data) => {
        console.log(data);
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "Commented Successfully",
          icon: "success",
        });
        setRealTimeComment(!realTimeComment);
        event.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-4 md:px-32 bg-slate-200/40 py-32">
      <div className="flex flex-col gap-6 bg-white shadow-xl  p-3 rounded-xl ring-2 ring-slate-200">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold">{blogTitle}...</h1>
        </div>
        {/* content image */}
        <div className="w-full md:h-[80vh] overflow-hidden rounded-xl">
          <img src={image} alt="" className=" w-full h-[100%] object-center" />
        </div>

        {/* User section */}
        <div className="mx-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-14 w-1h-14 rounded-full border-2 borde-orange-400"
              src={host?.image}
              alt=""
            />
            <div className="ml-2">
              <p className="font-bold  text-2xl">{host?.name}</p>
              <p className="text-sm font-semibold text-slate-600">
                {uploadTime}
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
        {/* text content section */}
        <div className="mx-3">
          <p>{content}</p>
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
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center cursor-pointer"
          >
            <FaComment size={20} className="fill-slate-500/90" />
            <p className="ml-2 font-semibold text-slate-600">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <FaShareAltSquare size={20} className="fill-slate-500/90" />
            <p className="ml-2 font-semibold text-slate-600">Share</p>
          </div>
        </div>

        {/* Comment box with all comments */}
        <div className={`${open ? "blcok" : "hidden"}`}>
          <div className="mb-3 text-slate-600 space-y-3">
            {commetns.map((text) => (
              <>
                <div key={text?._id} className="flex items-center gap-3">
                  <img
                    className="h-8 w-8 rounded-full border-2"
                    src={text?.host?.image}
                    alt=""
                  />
                  <p>
                    <span className="font-semibold text-slate-800">
                      {text?.host?.name}:
                    </span>{" "}
                    {text?.comment}
                  </p>
                </div>
              </>
            ))}

            {/* <div className="flex items-center gap-3">
              <img
                className="h-8 w-8 rounded-full border-2"
                src={user?.photoURL}
                alt=""
              />
              <p>
                <span className="font-semibold">Mohon Saha:</span> This is
                really a awesome post
              </p>
            </div> */}
          </div>

          {/* User upload comment box */}
          <div className="  flex">
            <div className="w-14">
              <img
                className="h-12 w-12 rounded-full border-2"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <form
              noValidate=""
              action=""
              className="w-full space-y-3 ng-untouched ng-pristine ng-valid"
              onSubmit={handleSubmitComment}
            >
              <div className="space-y-2">
                <div>
                  <textarea
                    type="text"
                    name="comment"
                    id="name"
                    required
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
              </div>

              <div className="text-right">
                <button
                  // onClick={() => setRealTimeComment(!realTimeComment)}
                  type="submit"
                  className="bg-slate-500/90  rounded-lg px-3 py-1 text-white"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
