import { useEffect, useState } from "react";
import ImageK from "./ImageK";
import { Link } from "react-router-dom";
import Search from "./Search";
import {
  SignedIn,
  SignedOut,
  useAuth,
  // SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);
  return (
    <div className=" container mx-auto  h-16 md:h-20 flex items-center justify-between py-4 px-3 fixed top-0 left-0 right-0    z-50 bg-[#f7fafa]  ">
      <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
        <ImageK src="/logo.jpg" h={28} w={28} alt="logo navbar" />
        <span className="font-bold text-slate-800">Blog</span>
      </Link>

      <div className="md:hidden flex items-center gap-3 ">
        <SignedIn className="w-[100px] h-[100px]">
          <UserButton className="w-full" />
        </SignedIn>
        <div
          className="cursor-pointer text-4xl  "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}{" "}
        </div>

        <div
          className={`w-[60%] h-screen flex flex-col z-50 gap-2 items-start px-4 py-15 bg-[#f7fafa]  fixed top-16 transition-all ease-in-out  ${
            isOpen ? "right-0" : "right-full"
          }`}
        >
          <div>
            <Search className="w-full" />
          </div>
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className=" w-full hover:bg-gray-200 px-3 py-2 active:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/write"
            className="w-full hover:bg-gray-200 px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            Create Post
          </Link>
          <Link
            to="/posts?cat=development"
            className="w-full hover:bg-gray-200 px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            development
          </Link>
          <Link
            className="w-full hover:bg-gray-200 px-3 py-2"
            to="/posts?cat=web-design"
            onClick={() => setIsOpen(false)}
          >
            web design
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="w-full hover:bg-gray-200 px-3 py-2"
            to="/posts?cat=marketing"
          >
            Markting
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="w-full hover:bg-gray-200 px-3 py-2"
            to="/posts?cat=databases"
          >
            Database
          </Link>

          <SignedOut>
            <Link to="/login" className="w-full">
              <button className="w-full text-sm py-3 px-5 rounded-lg text-white bg-blue-800">
                Login 🖐
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/post?sort=newest">Newst</Link>
        <Link to="/post?sort=oldest">oldest</Link>
        <Link to="/post?sort=trending">Trending</Link>
        <Link to="/post?sort=popular">Most Popular</Link>

        <SignedOut>
          <Link to="/login">
            <button className="text-sm py-2 px-4 rounded-3xl text-white bg-blue-800">
              Login 🖐
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
