import Media from "../../media/Media";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PostBlog />
      <div className="">
        <Media></Media>
      </div>
    </div>
  );
};

export default Home;
