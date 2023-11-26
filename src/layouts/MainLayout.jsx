import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
