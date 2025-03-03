import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "./PostListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPost = async (pageParam, searchParams) => {
  const searchObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/post`, {
    params: { page: pageParam, limit: 5, ...searchObj },
  });
  return res.data;
};

function PostList() {
  const [searchParams] = useSearchParams();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.hasMore ? pages.length + 1 : undefined,
  });

  console.log(data);
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>something going wrong</h1>;

  const AllPost = data?.pages.flatMap((page) => page.post) || [];
  if (!AllPost) return <h1>No Post Found</h1>;

  return (
    <InfiniteScroll
      dataLength={AllPost.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h1 style={{ textAlign: "center" }}></h1>}
      endMessage={
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          <b>All Post Loaded</b>
        </p>
      }
    >
      {AllPost?.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
}

export default PostList;
