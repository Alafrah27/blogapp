import { Link, useParams } from "react-router-dom";
import ImageK from "../components/ImageK";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

const fetchpost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/post/${slug}`);
  return res.data;
};
function SinglePostPage() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["singlePost", slug],
    queryFn: async () => fetchpost(slug),
  });
  console.log(data);
  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>somethig going wrong</h1>;
  if (!data) return <h1>Post not found</h1>;

  return (
    <div className="flex flex-col gap-12">
      {/* detail */}
      <div className="flex gap-8">
        <div className="flex flex-col flex-1 lg:w-3/5 gap-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>written by</span>
            <Link
              to={`/posts?author=${data?.user?.username}`}
              className="text-blue-800"
            >
              {data?.user?.username}
            </Link>
            <span>on</span>
            <Link to={`/posts?cat=${data.category}`} className="text-blue-800">
              {data.category}
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-black font-bold text-justify">{data?.desc}</p>
        </div>

        {data?.img && (
          <div className="hidden lg:block w-2/5">
            <ImageK
              src={data?.img}
              className="rounded-3xl object-cover"
              w="895"
            />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div
          className="lg:text-lg  flex flex-col gap-4 text-justify"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />

        {/* menu */}
        <div className="px-4 h-max sticky top-16">
          <h1 className="mt- mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {data?.user?.img && (
                <img
                  src={data?.user?.img}
                  alt="photo"
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}

              <Link
                to={`/posts?author=${data?.user?.username}`}
                className="font-medium underline text-blue-600"
              >
                {data?.user?.username}
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis,
            </p>
            <div className="flex gap-4">
              <Link>
                <ImageK src="/facebook.svg" w="40" h="40" />
              </Link>
              <Link>
                <ImageK src="/instagram.svg" w="40" h="40" />
              </Link>
            </div>
            <PostMenuAction data={data} />
            <h1 className="mt-8 mb-4 text-sm font-medium"> Categries</h1>
            <div className="flex flex-col gap-2">
              <Link to="/" className="underline text-blue-600">
                All categorey
              </Link>
              <Link
                to={`/posts?cat=${data.category}`}
                className="underline text-blue-600"
              >
                web Desingin
              </Link>
              <Link
                to={`/posts?cat=${data.category}`}
                className="underline text-blue-600"
              >
                frontend devloper
              </Link>
              <Link
                to={`/posts?cat=${data.category}`}
                className="underline text-blue-600"
              >
                backend devloper
              </Link>
              <Link
                to={`/posts?cat=${data.category}`}
                className="underline text-blue-600"
              >
                marketting
              </Link>
            </div>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* comment section */}
      <Comments postId={data._id} />
    </div>
  );
}

export default SinglePostPage;
