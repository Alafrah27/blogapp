import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useEffect, useState } from "react";
import { usePost } from "../services/usePostFetch";
import Upload from "../components/Upload";

function WritePage() {
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const { isLoaded, isSignedIn } = useUser();
  const { post, isPending } = usePost();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    post(data);
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Please sign in to continue</div>;

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-cl font-light">Share Your Story</h1>

      <form
        className="flex flex-col gap-6 flex-1 mb-6 overflow-y-auto"
        onSubmit={handleSubmit}
      >
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <h1 className=" w-9 h-9 p-2 font-bold rounded-xl  text-gray-500">
            <img src="plus_icon.png" alt="" className="w-full object-covers" />
          </h1>
        </Upload>

        <input
          type="text"
          placeholder="Tell your story"
          className="text-4xl font-semibold bg-transparent outline-none p-2"
          name="title"
        />

        <div className="flex items-center gap-4">
          <label className="text-sm">Category</label>
          <select name="category" className="p-2 rounded-xl bg-white ">
            <option value="general">General</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="web-design">Web Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="desc" // Changed to match backend expectation
          placeholder="Write your description"
          className="p-6 rounded-xl bg-white "
        />

        <div className="flex flex-1  ">
          <div className="flex  gap-2  mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <h2>🌆</h2>
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              {" "}
              <h2>▶️</h2>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white "
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>

        <button
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={isPending || (0 < progress && progress < 100)}
        >
          {isPending ? "Publishing..." : "Publish"}
        </button>
        {"progress:" + progress}
      </form>
    </div>
  );
}

export default WritePage;
