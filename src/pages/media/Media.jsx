import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { getAllBlogs } from "../../api/blogs";
import CategoryController from "../../components/CategoryController";

// eslint-disable-next-line react/prop-types
const Media = () => {
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
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 md:px-32 py-40 bg-slate-300/40">
      <div className="my-10">
        <CategoryController />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog}></Card>
        ))}
      </div>
    </div>
  );
};

export default Media;
