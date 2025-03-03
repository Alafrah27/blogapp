import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
function PostMenuAction({ data }) {
  const { getToken } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: SavePost, isPending: isSaving } = useQuery({
    queryKey: ["savepost"],
    queryFn: async () => {
      const token = await getToken(); // Await the token fetching
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/savedPost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
  });

  console.log(SavePost);
  const isAdmin = user?.publicMetadata?.role === "admin";
  const isSaved = SavePost?.some((p) => p === data._id) || false;
  console.log(isSaved);

  const { mutate: DeletePost } = useMutation({
    mutationFn: async () => {
      const token = await getToken(); // Await the token fetching
      if (!token) throw new Error("Token is undefined");

      return await axios.delete(
        `${import.meta.env.VITE_API_URL}/post/${data._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("post deleted successfully");
      navigate("/");
    },
    onError: (error) => {
      console.error("Error posting data:", error); // Log error here
      toast.success("failed to delete post");
    },
  });
  const { mutate: Save } = useMutation({
    mutationFn: async () => {
      const token = await getToken(); // Await the token fetching
      if (!token) throw new Error("Token is undefined");

      return await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/savePost`,
        { postId: data._id },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["savedPost"]);
    },
    onError: (error) => {
      console.error("Error posting data:", error); // Log error here
    },
  });
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      {isSaving ? (
        <h1>Saving...</h1>
      ) : (
        <div
          className={`flex items-center gap-4 text-sm cursor-pointer 
        
          `}
          onClick={() => {
            if (!user) return navigate("/login");
            Save();
          }}
        >
          <HiOutlineHeart
            size={20}
            className={isSaved ? "text-red-600" : "text-blue"}
          />
          <span>save this post</span>
        </div>
      )}
      {user && (user.username === data?.user?.username || isAdmin) && (
        <div
          className="flex items-center gap-4 text-sm cursor-pointer "
          onClick={() => DeletePost()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="red"
            width="20px"
            height="20px"
          >
            <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z" />
          </svg>
          <span>delete this post</span>
        </div>
      )}
    </div>
  );
}

export default PostMenuAction;
