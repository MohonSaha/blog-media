import { useSearchParams } from "react-router-dom";
import CategoryController from "../../../components/CategoryController";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../../api/blogs";
import Spinner from "../../../components/Spinner";
import Card from "../../../components/Card";

const CategoryBlog = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllBlogs()
      .then((data) => {
        if (category) {
          const filtered = data.filter((blog) => blog.category === category);
          setBlogs(filtered);
        } else {
          setBlogs(data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 md:px-32 pb-24 bg-slate-300/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog}></Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryBlog;
