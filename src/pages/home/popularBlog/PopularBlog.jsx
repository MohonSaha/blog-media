import { useEffect, useState } from "react";
import { getAllBlogs } from "../../../api/blogs";
import Spinner from "../../../components/Spinner";
import Card from "../../../components/Card";
import { getReacts } from "../../../api/react";

// eslint-disable-next-line react/prop-types
const PopularBlog = ({ realTimeComment }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [realTimeComment]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 md:px-32 pt-8 pb-16 bg-slate-300/40">
      <div className="m">
        <div className="">
          <h1 className="text-7xl text-center font-bold text-slate-400/50">
            Connect The World
          </h1>
        </div>
        <p className="font-bold  text-orange-600 text-3xl text-center relative bottom-11">
          Popular Blogs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.slice(0, 3).map((blog, index) => (
          <Card key={index} blog={blog}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularBlog;
