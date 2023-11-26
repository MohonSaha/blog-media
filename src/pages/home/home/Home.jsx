import { useState } from "react";
import Media from "../../media/Media";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";

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
        <Media realTimeComment={realTimeComment}></Media>
      </div>
    </div>
  );
};

export default Home;
