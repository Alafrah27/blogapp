import { useState } from "react";
import ImageK from "./ImageK";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  // SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-full h-16 md:h-20 flex items-center justify-between py-4 sticky top-0  z-50 bg-[#f7fafa] lg:bg-transparent ">
      <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
        <ImageK src="/logo.png" h={28} w={28} alt="logo navbar" />
        <span>Blog</span>
      </Link>

      <div className="md:hidden flex items-center gap-3">
        <SignedIn>
          <UserButton />
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
          <Link
            to="/"
            className=" w-full hover:bg-gray-200 px-3 py-2 active:bg-gray-700"
          >
            Home
          </Link>
          <Link to="/home" className="w-full hover:bg-gray-200 px-3 py-2">
            Trending
          </Link>
          <Link href="/home" className="w-full hover:bg-gray-200 px-3 py-2">
            Most Popular
          </Link>
          <Link href="/about" className="w-full hover:bg-gray-200 px-3 py-2">
            About
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
        <Link to="/home">Home</Link>
        <Link to="/home">Trending</Link>
        <Link to="/home">Most Popular</Link>
        <Link to="/home">About</Link>

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
