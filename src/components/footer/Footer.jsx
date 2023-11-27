import {
  FaBlog,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-32 pt-10 pb-6 bg-black text-white ">
      <div className="flex items-center justify-between">
        {/* left */}
        <div>
          <FaBlog className="inline-block text-orange-500 text-3xl font-bold" />
          <p className="font-bold  text-3xl">Blog Media</p>
        </div>
        {/* middle */}
        <div className="flex flex-col">
          <Link>Home</Link>
          <Link>Media</Link>
          <Link>Message</Link>
          <Link>About</Link>
        </div>
        {/* right */}
        <div className="text-xl font-bold space-y-2">
          <p>
            <FaFacebookSquare />
          </p>
          <FaYoutube></FaYoutube>
          <FaInstagram></FaInstagram>
          <FaTwitterSquare></FaTwitterSquare>
        </div>
      </div>
      <p className="text-center mt-8 text-lg text-slate-500">
        Copyright © 2023 - All right reserved by Mohon Saha
      </p>
    </div>
  );
};

export default Footer;
