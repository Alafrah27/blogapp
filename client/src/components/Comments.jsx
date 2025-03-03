import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComment = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comment/${postId}`
  );
  return res.data;
};
function Comments({ postId }) {
  const { getToken } = useAuth();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["comment", postId],
    queryFn: async () => fetchComment(postId),
  });

  const {
    mutate: comment,
    isPending: isCommentPending,
    variables,
  } = useMutation({
    mutationFn: async (newCComent) => {
      const token = await getToken(); // Await the token fetching
      console.log("Token:", token); // Debug token output
      if (!token) throw new Error("Token is undefined");

      return await axios.post(
        `${import.meta.env.VITE_API_URL}/comment/${postId}`,
        newCComent,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("comment created successfully");
      queryClient.invalidateQueries(["comment", postId]);
    },
    onError: (error) => {
      console.error("Error posting data:", error); // Log error here
    },
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>something going wrong with comments</h1>;
  if (!data) return <h1>Post not found</h1>;
  console.log(data);

  const handleComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      postId,
      desc: formData.get("desc"),
    };

    if (!data.desc) {
      return toast.error("comment can't be empty");
    }
    comment(data);
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-5 lg:w-3/5">
      <h1 className="text-2xl font-bold underline text-gray-400">Comments</h1>
      <form onSubmit={handleComment} className="mb-12">
        <div className="flex items-center justify-between gap-8">
          <textarea
            placeholder="write a comment...."
            className="w-full px-4 py-2 rounded-xl"
            name="desc"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded-xl mt-4">
            send
          </button>
        </div>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {isCommentPending && (
            <Comment
              comment={{
                desc: `${variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}

          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  );
}

export default Comments;
