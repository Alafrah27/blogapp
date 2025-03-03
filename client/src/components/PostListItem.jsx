import { Link } from "react-router-dom";
import ImageK from "./ImageK";
import { format } from "timeago.js";

function PostListItem({ post }) {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/2">
          <ImageK
            src={post.img}
            alt="post"
            className=" object-cover rounded-2xl md:h-[300px]"
            w="735"
          />
        </div>
      )}

      {/* {detail} */}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to={`/${post.slug}`}
          className="font-semibold text-1xl  text-slate-900"
        >
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>written by</span>
          <Link
            to={`/posts?author=${post?.user?.username}`}
            className="text-blue-800"
          >
            {post?.user?.username}
          </Link>
          <span>on</span>
          <Link to={`/posts?cat=${post.category}`} className="text-blue-800">
            {post.category}
          </Link>
          <span>{format(post.createdAt)}</span>
        </div>

        <p className="text-justify">{post.desc}</p>
        <Link to={`/${post.slug}`} className="text-blue-800 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostListItem;
