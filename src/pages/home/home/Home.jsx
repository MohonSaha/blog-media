import Media from "../../media/Media";
import Banner from "../banner/banner";
import PostBlog from "../postBlog/postBlog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PostBlog />
      <Media></Media>
    </div>
  );
};

export default Home;
