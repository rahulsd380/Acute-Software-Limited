import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-950 to-indigo-950">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
