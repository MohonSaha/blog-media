import { useEffect, useState } from "react";
import { getAllBlogs } from "../../../api/blogs";
import Spinner from "../../../components/Spinner";
import Card from "../../../components/Card";

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
    <div className="px-4 md:px-32 py-10 bg-slate-200/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.slice(0, 3).map((blog, index) => (
          <Card key={index} blog={blog}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularBlog;
