import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "timeago.js";

function Comment({ comment, postId }) {
  const { getToken } = useAuth();
  const { user } = useUser();

  const role = user?.publicMetadata?.role;
  const queryClient = useQueryClient();

  const { mutate: DeleteComment, isPending } = useMutation({
    mutationFn: async () => {
      const token = await getToken(); // Await the token fetching
      if (!token) throw new Error("Token is undefined");

      return await axios.delete(
        `${import.meta.env.VITE_API_URL}/comment/${comment._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("post deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["comment", postId] });
    },
    onError: (error) => {
      console.error("Error posting data:", error); // Log error here
      toast.success("failed to delete comment");
    },
  });

  return (
    <div className="bg-white p-4 rounded-xl mb-4">
      <div className="flex items-center gap-4">
        {comment?.user?.img && (
          <img
            src={comment?.user?.img}
            className=" w-12 h-12 rounded-full object-cover"
          />
        )}
        <span className="font-semibold text-lg">{comment?.user?.username}</span>
        <span className="text-gray-400 text-sm">
          {format(comment.createdAt)}
        </span>
        {user &&
          (comment?.user?.username === user?.username || role === "admin") && (
            <span
              className="text-red-300 hover:text-red-800 text-sm cursor-pointer "
              onClick={() => DeleteComment()}
            >
              {isPending ? "deleting comment..." : "delete"}
            </span>
          )}
      </div>
      <div className="mt-4 font-medium">
        <p className="text-[16px]">{comment.desc}</p>
      </div>
    </div>
  );
}

export default Comment;
