// import HeartButton from "./HeartButton";
import { AiFillHeart } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
const Card = ({ blog }) => {
  const { title, published_date, totalReact, image } = blog;

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={image}
            alt="blog"
          />
          {/* <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton />
          </div> */}
        </div>
        <div className="font-semibold text-lg">Sidemen, Indonesia</div>
        <div className="font-light text-neutral-500">{published_date}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold ">
            <AiFillHeart
              size={24}
              className="fill-slate-500/90 outline-2 hover:fill-orange-600"
            />
          </div>
          <div className="font-light">{totalReact}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
