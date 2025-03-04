import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-65 ">
      <Navbar />
      <main className="mt-24 h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
