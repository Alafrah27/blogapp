import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { Link } from "react-router-dom";

function PostListPages() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-sm flex gap-2 mb-8">
        <Link to="/" className="text-blue-800 underline">
          home{" "}
        </Link>{" "}
        <span>.</span>
        <span>Musdar Blog</span>
      </h1>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 md:hidden px-4 py-2 rounded-2xl mb-4 text-sm text-white"
      >
        {open ? "Close" : "Filter or Serch"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default PostListPages;
