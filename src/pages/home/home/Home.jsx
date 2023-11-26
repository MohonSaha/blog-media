import { useState } from "react";
import Media from "../../media/Media";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";
import PopularBlog from "../popularBlog/PopularBlog";

const Home = () => {
  const [realTimeComment, setRealTimeComment] = useState(false);

  return (
    <div>
      <Banner></Banner>
      <PostBlog
        setRealTimeComment={setRealTimeComment}
        realTimeComment={realTimeComment}
      />
      <div className="">
        <PopularBlog realTimeComment={realTimeComment}></PopularBlog>
      </div>
    </div>
  );
};

export default Home;
