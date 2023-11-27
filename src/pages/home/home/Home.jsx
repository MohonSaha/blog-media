import { useState } from "react";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";
import PopularBlog from "../popularBlog/PopularBlog";
import CategoryBlog from "../categoryBlog/CategoryBlog";
import CategoryController from "../../../components/CategoryController";
import SectionTitle from "../../../components/sectionTitle";

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
      <div>
        <SectionTitle
          bgText={"Let's Make A Tour"}
          mainText={"Search by category"}
        ></SectionTitle>
      </div>
      <div className="px-4 md:px-32 pt-6 bg-slate-300/40">
        <CategoryController pageUrl={"/"} />
      </div>
      <CategoryBlog />
    </div>
  );
};

export default Home;
