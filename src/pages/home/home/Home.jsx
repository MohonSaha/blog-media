import { useState } from "react";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";
import PopularBlog from "../popularBlog/PopularBlog";
import CategoryBlog from "../categoryBlog/CategoryBlog";

const Home = () => {
  const [realTimeComment, setRealTimeComment] = useState(false);

  return (
    <div>
      <Banner></Banner>
      <PostBlog
        setRealTimeComment={setRealTimeComment}
        realTimeComment={realTimeComment}
      />
      <PopularBlog realTimeComment={realTimeComment}></PopularBlog>
      <CategoryBlog />
    </div>
  );
};

export default Home;
