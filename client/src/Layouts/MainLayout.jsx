import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="mx-auto w-full  px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <Navbar />
      <main className="px-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
