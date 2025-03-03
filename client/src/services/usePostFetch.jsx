import { useAuth } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function usePost() {
  const { getToken } = useAuth(); // Make sure to destructure accordingly
  const navigate = useNavigate();
  const { mutate: post, isPending } = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken(); // Await the token fetching
      console.log("Token:", token); // Debug token output
      if (!token) throw new Error("Token is undefined");

      return await axios.post(
        `${import.meta.env.VITE_API_URL}/post/create`,
        newPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      console.log("this from onSuccess:", res);
      toast.success("Post created successfully");
      navigate(`/${res.data.slug}`);
    },
    onError: (error) => {
      console.error("Error posting data:", error); // Log error here
    },
  });

  return { post, isPending };
}
